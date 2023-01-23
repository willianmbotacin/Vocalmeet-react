import axiosProvider from './config/axios';
import { objectToQueryString } from '../../helpers/formatters';

export async function getMarkets(filters) {
  const defaultFilters = {
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage: '1h,24h,7d',
  }

  const queryString = objectToQueryString({ ...defaultFilters, ...filters });
  const response = await axiosProvider.get(`/coins/markets${queryString}`);
  return response.data;
}

export async function getCategories() {
  const response = await axiosProvider.get(`/coins/categories/list`);
  return response.data;
}