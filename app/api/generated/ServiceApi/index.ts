import {
  TokenCrmRequest,
  PackageDto,
  AdminServiceResponse,
  ServiceDto,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * receive service, subservice, package
 */
function receivePackageAndServiceAndSubService(
  params: {
    /** requestBody */
    body?: TokenCrmRequest;
  } = {} as any,
) {
  const url = basePath + '/service';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<PackageDto, true>(
    {
      method: 'post',
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
 * Get services by spCode
 */
function getServiceBySpCode(
  params: {
    spCode: string;
    page?: number;
    size?: number;
    sort?: any | null[];
  } = {} as any,
) {
  let url = basePath + '/service/sp/{spCode}';
  url = url.replace('{spCode}', params['spCode'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
  };
  const data = undefined;

  return fetcher<AdminServiceResponse[], true>(
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
 * Get services by campaign group id
 */
function getServiceByCampaignGroupId(
  params: {
    campaignGroupId: string;
    page?: number;
    size?: number;
    sort?: any | null[];
  } = {} as any,
) {
  let url = basePath + '/service/campaign-group/{campaignGroupId}';
  url = url.replace('{campaignGroupId}', params['campaignGroupId'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
  };
  const data = undefined;

  return fetcher<ServiceDto[], true>(
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
  receivePackageAndServiceAndSubService,
  getServiceBySpCode,
  getServiceByCampaignGroupId,
};
