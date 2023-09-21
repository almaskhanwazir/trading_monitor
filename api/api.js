import tradingview from './tradingview';

const api = {
  getCandles: async (symbol, from, to) => {
    const response = await tradingview.get(`/v2/candles/${symbol}?from=${from}&to=${to}`);
    return response.data;
  },
};

export default api;