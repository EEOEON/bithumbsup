import CoinList from './CoinList';

const TradeAside = () => {
  return (
    <div
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
