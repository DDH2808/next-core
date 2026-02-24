import { UserLaoIdFieldConfigDto, getConfigs, basePath } from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * get user columns retrieved
 */
function getAllUserColumns() {
  const url = basePath + '/user-field';

  const configs = getConfigs('get', 'application/json', url, {});

  const data = undefined;

  return fetcher<UserLaoIdFieldConfigDto[], true>(
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
  getAllUserColumns,
};
