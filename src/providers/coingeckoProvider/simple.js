import axiosProvider from './config/axios'

export async function getCurrencies() {
  const response = await axiosProvider.get('/simple/supported_vs_currencies')
  return response.data
}