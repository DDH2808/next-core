import {
  SegmentDto,
  CreateSegmentRequest,
  UserInfoModel,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * Get segments
 */
function getSegments(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  const url = basePath + '/segment';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<SegmentDto[], true>(
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
 * create segment
 */
function createSegment(
  params: {
    /** requestBody */
    body?: CreateSegmentRequest;
  } = {} as any,
) {
  const url = basePath + '/segment';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<SegmentDto, true>(
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
 * Delete segment
 */
function deleteSegment(
  params: {
    /** requestBody */
    body?: any | null[];
  } = {} as any,
) {
  const url = basePath + '/segment';

  const configs = getConfigs('delete', 'application/json', url, {});

  const data = params.body;

  return fetcher<SegmentDto[], true>(
    {
      method: 'delete',
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
 * get segment detail
 */
function getSegmentDetail(
  params: {
    id: string;
  } = {} as any,
) {
  let url = basePath + '/segment/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  const data = undefined;

  return fetcher<SegmentDto, true>(
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
 * get user success
 */
function getUsersDetailsBySegment(
  params: {
    id: string;
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  let url = basePath + '/segment/user/{id}';
  url = url.replace('{id}', params['id'] + '');

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<UserInfoModel[], true>(
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
 * get all segment
 */
function getAllSegments(
  params: {
    order?: string;
    direction?: string;
    page?: number;
    pageSize?: number;
  } = {} as any,
) {
  const url = basePath + '/segment/search';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    order: params['order'],
    direction: params['direction'],
    page: params['page'],
    pageSize: params['pageSize'],
  };
  const data = undefined;

  return fetcher<SegmentDto[], true>(
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
  getSegments,
  createSegment,
  deleteSegment,
  getSegmentDetail,
  getUsersDetailsBySegment,
  getAllSegments,
};
