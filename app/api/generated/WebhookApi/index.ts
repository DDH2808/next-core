import {
  TokenCrmRequest,
  WebHookDto,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * push user and campaign group config
 */
function webHookCrmUpdate(
  params: {
    /** requestBody */
    body?: TokenCrmRequest;
  } = {} as any,
) {
  const url = basePath + '/webhook/crm';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<object, true>(
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
 *
 */
function getLog(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  const url = basePath + '/webhook/log';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<WebHookDto[], true>(
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
  webHookCrmUpdate,
  getLog,
};
