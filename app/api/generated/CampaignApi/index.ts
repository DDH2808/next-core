import {
  CampaignStatusRequest,
  CampaignDto,
  CampaignResponse,
  CreateCampaignRequest,
  ExpectedCostDto,
  CampaignEventRequest,
  IGWCampaignEventRequest,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 *
 */
function adminChangeStatus(
  params: {
    id: string;
    /** requestBody */
    body?: CampaignStatusRequest;
  } = {} as any,
) {
  let url = basePath + '/campaign/{id}/status';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('put', 'application/json', url, {});

  const data = params.body;

  return fetcher<CampaignDto, true>(
    {
      method: 'put',
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
 * Get campaigns
 */
function getCampaigns(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  const url = basePath + '/campaign';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<CampaignResponse[], true>(
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
 * Save campaign
 */
function saveCampaign(
  params: {
    /** requestBody */
    body?: CreateCampaignRequest;
  } = {} as any,
) {
  const url = basePath + '/campaign';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

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
 * submit campaign
 */
function submitCampaign(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/campaign/{id}/submit';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('post', 'application/json', url, {});

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
 * Campaign duplicated successfully
 */
function duplicateCampaign(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/campaign/{id}/duplicate';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('post', 'application/json', url, {});

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
 * get expected cost
 */
function getExpectedCost(
  params: {
    /** requestBody */
    body?: CreateCampaignRequest;
  } = {} as any,
) {
  const url = basePath + '/campaign/expected-cost';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<ExpectedCostDto, true>(
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
 * Launch by event
 */
function launchByEvent(
  params: {
    /** requestBody */
    body?: CampaignEventRequest;
  } = {} as any,
) {
  const url = basePath + '/campaign/event';

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
 * Launch by IGW event
 */
function launchByIwgEvent(
  params: {
    /** requestBody */
    body?: IGWCampaignEventRequest;
  } = {} as any,
) {
  const url = basePath + '/campaign/event-igw';

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
 * get campaign
 */
function getCampaign(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/campaign/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  const data = undefined;

  return fetcher<CampaignDto, true>(
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
 * search campaign with segment
 */
function searchCampaigns(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
    status?: string;
    type?: string;
    groupId: string;
  } = {} as any,
) {
  const url = basePath + '/campaign/search';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
    status: params['status'],
    type: params['type'],
    groupId: params['groupId'],
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
  adminChangeStatus,
  getCampaigns,
  saveCampaign,
  submitCampaign,
  duplicateCampaign,
  getExpectedCost,
  launchByEvent,
  launchByIwgEvent,
  getCampaign,
  searchCampaigns,
};
