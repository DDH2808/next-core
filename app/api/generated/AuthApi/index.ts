import {
  CrmLoginRequest,
  AuthResponse,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 *
 */
function crmLogin(
  params: {
    /** requestBody */
    body?: CrmLoginRequest;
  } = {} as any,
) {
  const url = basePath + '/auth/crm/login';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<AuthResponse, true>(
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
  crmLogin,
};
