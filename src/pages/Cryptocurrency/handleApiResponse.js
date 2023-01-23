const moneyFormat = (number, decimals = 2, nullValue = 0) => {
  if (!number) return nullValue
  return '$' + number.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const percentage = (number) => {
  number = parseFloat(number);
  if (isNaN(number)) return '-';

  return number.toFixed(1) + '%';
}

const handleApiResponse = (responseList) => {
  const result = responseList.map((data) => {
    // Mkt Cap/FDV
    const mcf = data.market_cap / data.fully_diluted_valuation;

    let newData = {
      id: data.id,
      name: data.name,
      price: moneyFormat(data.current_price),
      '1h': percentage(data.price_change_percentage_1h_in_currency),
      '24h': percentage(data.price_change_percentage_24h_in_currency),
      '7d': percentage(data.price_change_percentage_7d_in_currency),
      '24hVolume': moneyFormat(data.total_volume, 0, '-'),
      marketCap: moneyFormat(data.market_cap, 0, '-'),
      fdv: moneyFormat(data.fully_diluted_valuation, 0, '-'),
      mktCapFdv: isFinite(mcf) ? mcf.toFixed(2) : '-',
    }

    return newData;
  });

  return result;
}

export default handleApiResponse