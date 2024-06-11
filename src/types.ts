export interface TickerContent {
  volumePower: string;
  chgAmt: string;
  chgRate: string;
  prevClosePrice: string;
  buyVolume: string;
  sellVolume: string;
  volume: string;
  value: string;
  highPrice: string;
  lowPrice: string;
  closePrice: string;
  openPrice: string;
  time: string;
  date: string;
  tickType: string;
  symbol: string;
}

export interface TickerData {
  [key: string]: TickerContent;
}

export interface MarketCode {
  market: string;
  korean_name: string;
  english_name: string;
}

export interface Market {
  market: string;
  koreanName: string;
  englishName: string;
  reversedMarket: string;
  paymentCurrency: string;
  orderCurrency: string;
}

export interface MarketWithTicker extends Market {
  ticker: TickerContent | null;
}
