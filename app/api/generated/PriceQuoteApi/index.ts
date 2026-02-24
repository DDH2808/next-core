import {
  PriceQuoteDto,
  CreatePriceQuoteRequest,
  UpdatePriceQuoteRequest,
  getConfigs,
  basePath,
} from '../index.defs';

import { fetcher } from '../../Fetcher';
/** Generate by swagger-axios-codegen */

/**
 * Get price quotes
 */
function getPriceQuotes(
  params: {
    page?: number;
    size?: number;
    sort?: any | null[];
    query?: string;
  } = {} as any,
) {
  const url = basePath + '/price-quote';

  const configs = getConfigs('get', 'application/json', url, {});

  configs.params = {
    page: params['page'],
    size: params['size'],
    sort: params['sort'],
    query: params['query'],
  };
  const data = undefined;

  return fetcher<PriceQuoteDto[], true>(
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
 * Create price quote
 */
function createPriceQuote(
  params: {
    /** requestBody */
    body?: CreatePriceQuoteRequest;
  } = {} as any,
) {
  const url = basePath + '/price-quote';

  const configs = getConfigs('post', 'application/json', url, {});

  const data = params.body;

  return fetcher<PriceQuoteDto, true>(
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
 * Update price quote
 */
function updatePriceQuote(
  params: {
    /** requestBody */
    body?: UpdatePriceQuoteRequest;
  } = {} as any,
) {
  const url = basePath + '/price-quote';

  const configs = getConfigs('patch', 'application/json', url, {});

  const data = params.body;

  return fetcher<PriceQuoteDto, true>(
    {
      method: 'patch',
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
  getPriceQuotes,
  createPriceQuote,
  updatePriceQuote,
};
