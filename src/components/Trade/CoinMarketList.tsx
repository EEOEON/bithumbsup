/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import CoinList from './CoinList';

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

const CoinMarketList = () => {
  const [activeTab, setActiveTab] = useState<string>('원화');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className='coin-market-list'
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div
        className='search-container'
        style={{ display: 'flex', borderBottom: '1px solid #eee' }}
      >
        <div
          className='search-trade'
          style={{
            alignItems: 'center',
            display: 'flex',
            flex: '1 1',
            paddingRight: '28px',
            position: 'relative',
          }}
        >
          <div
            style={{
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQkM2NDI2MTY2M0UxMUVEQjRBM0E5RjA3QUVBNDExNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQkM2NDI2MjY2M0UxMUVEQjRBM0E5RjA3QUVBNDExNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFCQzY0MjVGNjYzRTExRURCNEEzQTlGMDdBRUE0MTE0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFCQzY0MjYwNjYzRTExRURCNEEzQTlGMDdBRUE0MTE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XapbKgAAAXFJREFUeNqcU9uRgkAQBCQALgOM4DQD98MSo5AMNAPYCM4MTqOgikdhBkcIhMAHX6hwPdZgLQjFeVMlLOtuT/dMj64pkaapdbvd9rquu03T2Lyd4TubzWZSCJFrA6G3iziOd3gdcdnShqO43+/ScZxj/w+DAfa4fGKAC36iLMuP9XpNSQT2z3hbYPPFybpMIMFGhh8CqOtabjYbf4hGFEW07xEj0zTnkFY8mVyvV58AoPs0BkABVj6ztKqqOnTk4PInLZjyVEh6QNauX5MFZ7pMIUBGxgntl8K27Z0CUevQl/PoPfyxmAJBcVetdzogSi28KRCcdR8thfk6INBJ5iGaK2QaBUqSxMNlKmiBjsoXx4Zh6OLAN2ch052p0DwGC2bZSiGfLNUR0BW9Bz48anuAF0hiUx3RZtECGYqZjsi65Bo9NXPhJcZgDmfTCOTUYqxTcnuHyV8jCAIbLFKV0dsgQ0DGf0C2223eSsPQar8CDACZoskC2ogMKgAAAABJRU5ErkJggg==) no-repeat 50% 50%',
              height: '46px',
              width: '40px',
            }}
          />
          <input
            type='text'
            placeholder='가상자산명 또는 심볼명 검색'
            style={{
              backgroundColor: 'transparent',
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
      <div className='coin-market-list-tab'>
        <ul
          className='market-tab'
          style={{ display: 'flex', borderBottom: '1px solid #eee' }}
        >
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
        <CoinList />
      </div>
    </div>
  );
};

export default CoinMarketList;
