import { SpCodeDto, getConfigs, basePath } from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * Service provider codes retrieved successfully
 */
function getSpCodesByUser() {
  const url = basePath + '/user/sp-codes';

  const configs = getConfigs('get', 'application/json', url, {});

  const data = undefined;

  return fetcher<SpCodeDto, true>(
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
  getSpCodesByUser,
};
