import CoinList from './CoinMarketList';

const TradeAside = () => {
  return (
    <div
      className='trade-aside'
      style={{
        border: '1px solid #eee',
        borderRadius: '4px',
        boxSizing: 'border-box',
        flex: '0 0 360px',
        height: 'calc(100vh-140vh)',
        marginRight: '40px',
      }}
    >
      <CoinList />
    </div>
  );
};

export default TradeAside;
