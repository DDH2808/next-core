import { CampaignGroupResponse, getConfigs, basePath } from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 *
 */
function getCampaignGroups(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
    spCode: string;
  } = {} as any,
) {
  const url = basePath + '/campaign-group';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
    spCode: params['spCode'],
  };
  const data = undefined;

  return fetcher<CampaignGroupResponse[], true>(
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
  getCampaignGroups,
};
