import { CronJobResponse, getConfigs, basePath } from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * generate schedule cronjob
 */
function approve(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/cronjob/approve/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('post', 'application/json', url, {});

  const data = undefined;

  return fetcher<CronJobResponse, true>(
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
  approve,
};
