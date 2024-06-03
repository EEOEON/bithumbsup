import TradeAside from './TradeAside';
import TradeMain from './TradeMain';

const TradeContent = () => {
  return (
    <div
      className='trade-content'
      style={{
        display: 'flex',
        width: '1480px',
        padding: '20px 40px 80px',
        minHeight: '950px',
      }}
    >
      <TradeAside />
      <TradeMain />
    </div>
  );
};

export default TradeContent;
