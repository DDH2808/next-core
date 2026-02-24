import { CampaignDto, getConfigs, basePath } from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * Campaign approval successfully
 */
function approveCampaign(
  params: {
    id?: string;
    status?: string;
  } = {} as any,
) {
  const url = basePath + '/admin/campaign/approve';

  const configs = getConfigs('post', 'application/json', url, {});

  configs.params = { id: params['id'], status: params['status'] };
  const data = undefined;

  return fetcher<CampaignDto, true>(
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
 * search campaign with campaign group
 */
function searchCampaignWithCampaignGroup(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
    groupId?: string;
    status?: string;
    type?: string;
  } = {} as any,
) {
  const url = basePath + '/admin/campaign/search';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
    groupId: params['groupId'],
    status: params['status'],
    type: params['type'],
  };
  const data = undefined;

  return fetcher<CampaignDto[], true>(
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
  approveCampaign,
  searchCampaignWithCampaignGroup,
};
