import { useQuery } from '@tanstack/react-query';
import { Market, MarketCode } from '../types';

const fetchMarketData = async (): Promise<Market[]> => {
  const response = await fetch(
    'https://api.bithumb.com/v1/market/all?isDetails=false',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.map((market: MarketCode) => {
    const [base, quote] = market.market.split('-');
    return {
      market: market.market,
      koreanName: market.korean_name,
      englishName: market.english_name,
      reversedMarket: `${quote}_${base}`,
      paymentCurrency: base,
      orderCurrency: quote,
    };
  });
};

const useMarketData = (currencyFilter?: string) => {
  return useQuery<Market[]>({
    queryKey: ['marketData', currencyFilter],
    queryFn: async () => {
      const data = await fetchMarketData();
      return currencyFilter
        ? data.filter((market) => market.paymentCurrency === currencyFilter)
        : data;
    },
  });
};

export default useMarketData;
