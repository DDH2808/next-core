import {
  WorkerLog,
  UserStatisticDto,
  WorkerLogDto,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 *
 */
function getDetailWorkerLog(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/worker-log/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  const data = undefined;

  return fetcher<WorkerLog, true>(
    {
      method: 'get',
      url: url,
      data,
      params: configs.params,
    },
    {
      displayError: false,
    },
    true,
  );
}
/**
 * Get user statistic success
 */
function getWorkerHistoryByUser(
  params: {
    id: string;
    type: string;
    date?: string;
  } = {} as any,
) {
  let url = basePath + '/worker-log/user/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = { type: params['type'], date: params['date'] };
  const data = undefined;

  return fetcher<UserStatisticDto[], true>(
    {
      method: 'get',
      url: url,
      data,
      params: configs.params,
    },
    {
      displayError: false,
    },
    true,
  );
}
/**
 * get worker log
 */
function getWorkerHistory(
  params: {
    id: string;
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  let url = basePath + '/worker-log/campaign/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<WorkerLogDto[], true>(
    {
      method: 'get',
      url: url,
      data,
      params: configs.params,
    },
    {
      displayError: false,
    },
    true,
  );
}
export default {
  getDetailWorkerLog,
  getWorkerHistoryByUser,
  getWorkerHistory,
};
