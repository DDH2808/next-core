import {
  CrmServiceModel,
  CreateCrmServiceRequest,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 *
 */
function getCrmServices(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  const url = basePath + '/crm-service';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<CrmServiceModel[], true>(
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
 *
 */
function createCrmService(
  params: {
    /** requestBody */
    body?: CreateCrmServiceRequest;
  } = {} as any,
) {
  const url = basePath + '/crm-service';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<CrmServiceModel, true>(
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
export default {
  getCrmServices,
  createCrmService,
};
