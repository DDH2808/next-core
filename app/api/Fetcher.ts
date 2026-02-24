import { useTokenStore } from '@/stores/tokenStore';
import { useUserStore } from '@/stores/userStore';
import { perfConfig } from '@/utils/firebase';
import { Modal, notification } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { PerformanceTrace, trace } from 'firebase/performance';
import Config from '../config';

export interface IDataError {
  errorCode: string;
  errorMessage?: string;
}

export interface IMetadata {
  time?: string;
  totalPages: number;
  totalItems: number;
  currentPage: number;
  pageSize?: number;
}

export interface IDataWithMeta<T> {
  metaData: IMetadata;
  data: T;
}

export interface IResponseDTO<T, WithMetadata extends boolean> {
  success: boolean;
  errorCode: string;
  message?: string;
  metaData: WithMetadata extends true ? IMetadata : undefined;
  data?: T;
}

interface IFetcherOptions {
  token?: string;
  withToken?: boolean;
  displayError?: boolean;
}

export interface IRefreshToken {
  accessToken: string;
  refreshToken: string;
}

function logout(): void {
  try {
    useTokenStore.getState().logoutUser();
    window.location.assign(Config.PATHNAME.LOGIN);
  } catch {
    window.alert('Trình duyệt bị lỗi. Xóa Cookie trình duyệt và thử lại');
  }
}

function confirmLogout(
  title: string,
  content: string,
  isRequiredLogOut: boolean,
): void {
  Modal.destroyAll();
  if (!isRequiredLogOut) {
    Modal.confirm({
      title,
      content,
      onOk: logout,
    });
  } else {
    Modal.confirm({
      title,
      content,
      onOk: logout,
      onCancel: logout,
    });
  }
}

function displayError(dataError: IDataError): void {
  notification.error({
    message: 'Something is wrong. Please try again',
    description: dataError.errorMessage ?? 'Somethings Wrong',
    duration: 3,
  });
}

function handleRefreshToken() {
  return new Promise<void>((resolve, reject) => {
    fetcher<IRefreshToken>(
      {
        url: '/auth/refresh-token',
        method: 'post',
        data: { refreshToken: useTokenStore.getState().refreshToken },
      },
      { displayError: false },
    )
      .then(res => {
        useTokenStore.getState().loginUser(res);
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}

function getAuthorization(defaultOptions: IFetcherOptions) {
  if (defaultOptions.token) {
    return `Bearer ${defaultOptions.token}`;
  }

  if (defaultOptions.withToken) {
    const accessToken = useTokenStore.getState().accessToken;
    if (accessToken) {
      return `Bearer ${accessToken}`;
    }
  }

  return undefined;
}

function getSelectedSpCode() {
  const selectedSpCode = useUserStore.getState().selectedSpCode;
  return selectedSpCode;
}

function createApiClient(config: AxiosRequestConfig, options: IFetcherOptions) {
  const defaultOptions: IFetcherOptions = {
    withToken: Config.NETWORK_CONFIG.USE_TOKEN,
    displayError: Config.NETWORK_CONFIG.DISPLAY_ERROR,
    ...options,
  };

  const apiClient = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getAuthorization(defaultOptions),
      'x-sp-code': getSelectedSpCode(),
    },
    baseURL: Config.NETWORK_CONFIG.API_BASE_URL,
    timeout: Config.NETWORK_CONFIG.TIMEOUT,
    paramsSerializer: {
      indexes: null,
    },
  });

  return { apiClient, defaultOptions };
}

function returnResponseData<T, WithMetadata extends boolean>(
  defaultOptions: IFetcherOptions,
  response: AxiosResponse<IResponseDTO<T, WithMetadata>, IDataError>,
  withMetadata: WithMetadata,
  resolve: (
    value:
      | (WithMetadata extends true ? IDataWithMeta<T> : T)
      | PromiseLike<WithMetadata extends true ? IDataWithMeta<T> : T>,
  ) => void,
  reject: (reason?: IDataError) => void,
) {
  if (response.data?.success) {
    const data = response.data.data;
    if (data) {
      if (withMetadata) {
        // @ts-expect-error Typescript hasnt supported condition variables with generictype yet
        resolve({ data: data, metaData: response.data.metaData });
      } else {
        // @ts-expect-error Typescript hasnt supported condition variables with generictype yet
        resolve(data);
      }
      return true;
    }
    const dataEmpty: IDataError = {
      errorCode: 'ERROR???',
      errorMessage: 'Data is empty',
    };
    if (defaultOptions.displayError) {
      displayError(dataEmpty);
    }
    reject(dataEmpty);
    return true;
  }
  return false;
}

async function processOtherCase<T, E, WithMetadata extends boolean>(
  config: AxiosRequestConfig,
  options: IFetcherOptions,
  defaultOptions: IFetcherOptions,
  response: AxiosResponse<IResponseDTO<T, WithMetadata>, IDataError>,
  resolve: (value: E) => void,
  reject: (reason?: IDataError) => void,
  retryFetcher: (
    config: AxiosRequestConfig,
    options: IFetcherOptions,
  ) => Promise<E>,
) {
  const dataError: IDataError = {
    errorCode: response.data.errorCode,
    errorMessage: response.data.message,
  };
  if (dataError?.errorCode === 'AUTH000221') {
    try {
      await handleRefreshToken();
      const data = await retryFetcher(config, options);
      resolve(data);
    } catch {
      confirmLogout(
        'Phiên đăng nhập hết hạn',
        'Vui lòng đăng nhập lại!',
        false,
      );
      reject(dataError);
    }
    return;
  }
  if (dataError?.errorCode === 'AUTH000220') {
    confirmLogout('Phiên đăng nhập hết hạn', 'Vui lòng đăng nhập lại!', true);
    reject(dataError);
    return;
  }
  if (dataError?.errorCode === 'JWT000201') {
    confirmLogout(
      'Bạn chưa đăng nhập',
      'Vui lòng đăng nhập để sử dụng chức năng này!',
      false,
    );
    reject(dataError);
    return;
  }
  if (defaultOptions.displayError) {
    displayError(dataError);
  }
  reject(dataError);
}

function returnErrorData(
  defaultOptions: IFetcherOptions,
  error: Error | AxiosError,
  reject: (reason?: IDataError) => void,
) {
  if (axios.isAxiosError(error)) {
    // Axios error
    const somethingsWrong: IDataError = {
      errorCode: 'ERROR???',
      errorMessage: 'Something is wrong',
    };

    let dataError: IDataError = somethingsWrong;
    if (error?.response?.data) {
      dataError = {
        errorCode: error?.response?.data.errorCode,
        errorMessage: error?.response?.data.message,
      };
    }

    if (dataError?.errorCode === 'AUTH3001.NotAuthenticated') {
      logout();
    } else if (defaultOptions.displayError) {
      displayError(dataError);
    }

    return reject(dataError);
  }

  // Native error
  notification.error({
    message: 'Something is wrong. Please try again',
    description: error.message || String(error),
  });

  return reject({
    errorCode: 'NATIVE_ERROR',
    errorMessage: 'Somethings is wrong',
  });
}

export async function fetcher<T, WithMetadata extends boolean = false>(
  config: AxiosRequestConfig,
  options: IFetcherOptions = {},
  withMetadata: WithMetadata = false as WithMetadata,
): Promise<WithMetadata extends true ? IDataWithMeta<T> : T> {
  const { apiClient, defaultOptions } = createApiClient(config, options);
  const performance = perfConfig.performance;

  const traceName = `http_${config.method || 'get'}_${config.url}`;
  let perfTrace: PerformanceTrace | null = null;
  if (performance) {
    perfTrace = trace(performance, traceName);
    perfTrace.start();
  }

  return new Promise((resolve, reject) => {
    apiClient
      .request<T, AxiosResponse<IResponseDTO<T, WithMetadata>>>(config)
      .then(async response => {
        if (perfTrace) {
          perfTrace.putMetric('http_response_code', response.status);
          perfTrace.stop();
        }
        const responseData = returnResponseData(
          defaultOptions,
          response,
          withMetadata,
          resolve,
          reject,
        );
        if (!responseData) {
          await processOtherCase(
            config,
            options,
            defaultOptions,
            response,
            resolve,
            reject,
            fetcher,
          );
        }
      })
      .catch((error: Error | AxiosError) => {
        if (perfTrace) {
          perfTrace.putAttribute('error', 'true');
          perfTrace.stop();
        }
        returnErrorData(defaultOptions, error, reject);
      });
  });
}
