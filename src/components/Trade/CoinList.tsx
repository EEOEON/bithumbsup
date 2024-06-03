/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const getButtonStyle = (isActive: boolean) => css`
  box-sizing: border-box;
  color: ${isActive ? '#1b1b1b' : '#777'};
  font-size: 14px;
  font-weight: ${isActive ? 700 : 400};
  line-height: 21px;
  padding: 11px 0 9px;
  position: relative;
  text-align: center;
  width: 100%;
  ${isActive &&
  css`
    &::after {
      background-color: #1b1b1b;
      bottom: -1px;
      content: '';
      height: 3px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  `}
`;

const CoinList = () => {
  const [activeTab, setActiveTab] = useState<string>('원화');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className='coin-list'
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div
        className='search-container'
        style={{ display: 'flex', borderBottom: '1px solid #eee' }}
      >
        <div>
          <input
            placeholder='가상자산명 또는 심볼명 검색'
            style={{
              color: '#777',
              fontSize: '14px',
              height: '46px',
              outline: 'none',
              width: '244px',
            }}
          />
        </div>
        <div>button</div>
      </div>
      <div className='coin-list-market'>
        <ul style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
          {['원화', 'BTC', '보유', '관심'].map((tab) => (
            <li key={tab} style={{ flex: '1 1' }}>
              <button
                type='button'
                css={getButtonStyle(activeTab === tab)}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoinList;
