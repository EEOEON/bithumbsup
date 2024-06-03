import Trade from './Trade';

const Content = () => {
  return (
    <div
      className='content'
      style={{
        boxSizing: 'border-box',
        height: '100%',
        minHeight: '1350px',
        paddingTop: '96px',
        position: 'relative',
      }}
    >
      <Trade />
    </div>
  );
};

export default Content;
