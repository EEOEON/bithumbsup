import { useEffect, useState } from 'react';
import useMarketData from '../../hooks/useMarketData';
import CoinListRow from './CoinListRow';
import { MarketWithTicker } from '../../types';

const CoinList = () => {
  const [marketWithTickerData, setMarketWithTickerData] = useState<
    MarketWithTicker[]
  >([]);
  const { data: marketList, error, isLoading, isError } = useMarketData('KRW');

  useEffect(() => {
    if (!marketList) return;

    const initialData = marketList.map((market) => ({
      ...market,
      ticker: null,
    }));
    setMarketWithTickerData(initialData);

    const socket = new WebSocket('wss://pubwss.bithumb.com/pub/ws');

    socket.onopen = () => {
      console.log('WebSocket Client Connected');

      // 구독할 항목을 웹소켓 서버에 요청
      const subscribeMessage = JSON.stringify({
        type: 'ticker',
        symbols: marketList.map((x) => x.reversedMarket),
        tickTypes: ['24H'],
      });
      socket.send(subscribeMessage);
    };

    socket.onmessage = (message) => {
      const parsedData = JSON.parse(message.data);

      if (parsedData.type === 'ticker') {
        setMarketWithTickerData((prev) =>
          prev.map((item) =>
            item.reversedMarket === parsedData.content.symbol
              ? { ...item, ticker: parsedData.content }
              : item
          )
        );
      }
      // console.log('WebSocket Message:', parsedData);
    };

    socket.onerror = (err) => {
      console.error('WebSocket Error:', err);
    };

    socket.onclose = () => {
      console.log('WebSocket Client Disconnected');
    };

    // 컴포넌트 언마운트 시 WebSocket 연결 닫기
    return () => {
      socket.close();
    };
  }, [marketList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Market List</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
          </tr>
        </thead>
        <ul>
          {marketWithTickerData.map((market) => (
            <CoinListRow key={market.market} market={market} />
          ))}
        </ul>
      </table>
    </div>
  );
};

export default CoinList;
