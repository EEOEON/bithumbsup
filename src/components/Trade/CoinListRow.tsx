import { MarketWithTicker } from '../../types';

interface CoinListRowProps {
  market: MarketWithTicker;
}

const CoinListRow = ({ market }: CoinListRowProps) => {
  const { koreanName, paymentCurrency, orderCurrency, ticker } = market;

  const formatNumber = (number: string | undefined) => {
    if (!number) return 'N/A';
    return new Intl.NumberFormat('ko-KR').format(Number(number));
  };

  const formatValueToMillions = (number: string | undefined) => {
    if (!number) return 'N/A';
    const valueInMillions = Math.floor(Number(number) / 1000000);
    return formatNumber(valueInMillions.toString());
  };

  return (
    <li
      className='coin-list-row'
      style={{
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        minHeight: '51px',
        position: 'relative',
      }}
    >
      <div
        className='coin-list-row-inner'
        style={{
          alignItems: 'center',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div
          className='coin-list-row-item-favorite'
          style={{
            alignItems: 'center',
            bottom: 0,
            cursor: 'default',
            display: 'flex',
            left: 0,
            paddingLeft: '7px',
            position: 'absolute',
            top: 0,
            width: '19px',
            zIndex: 10,
          }}
        >
          <button
            type='button'
            style={{
              background:
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAOCAYAAABKKc6PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NEI2NzZEMzY2M0UxMUVEOTk5N0ZCODc0OEY2QTExRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEI2NzZENDY2M0UxMUVEOTk5N0ZCODc0OEY2QTExRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QjY3NkQxNjYzRTExRUQ5OTk3RkI4NzQ4RjZBMTFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QjY3NkQyNjYzRTExRUQ5OTk3RkI4NzQ4RjZBMTFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8qL6YgAAAapJREFUeNqsVTFuwkAQ3D0HoygNPRTmBZgf2E/gBUCRFEkK8gKekCJCaeEF5AeEH5gXYAlEG8rIhtvsOcQ5kM82JCMtHOzceG61twYwgJ6hBjkgoswwYblc5uoJ44NsnMoRzuCfUK1Wp5vNZnaWEXoBD/A74lf+/iNWq5XH1UpCrcsbETj8WVvyd30pLMsaZq11YNoPNjh7ABdJeCioe0RCHO+lnFsCQviEAJ9ga+oH5ib9UKlUHP7pcnj8X/eENub9c45wt9sFzWZzi8oEVfHjnBPiFbXhloKsXBiGNdu2z9JjQ22RnE7ipPQmSRO8g8CUV6dj4ckZJiaNRiNIekTEcgBkFtcQWI/QKyLFcTxQ3DJ6bKKXNquqCkbkF5gJ8Zo5JaCqEkWRX2AmPHCOb40yw60b5tRwgX3mlIQyox6WQ1kcOJnX1zV3KLYuuLluTq6VOUcOI93RKvDOH28a1yka+xkj3dGakvXgSE8f+6mR2E43Bfs9+eIBfHEPHUnUT0t8oxktwGGOJHpSSp+b0q/X6x3S9DTOMaKRuZSnuTIvvfV6bdQ7zX0JMACl1N9lCe+WkwAAAABJRU5ErkJggg==) no-repeat -20px 0',
              cursor: 'pointer',
              height: '14px',
              verticalAlign: 'top',
              width: '14px',
            }}
          >
            <span className='blind'>즐겨찾기</span>
          </button>
        </div>
        <div
          className='coin-list-row-conin-list-row-link'
          style={{
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'flex',
            minHeight: '51px',
            overflow: 'hidden',
            padding: '8px 14px 8px 26px',
          }}
        >
          <div
            className='coin-list-row-item-coin-name'
            style={{
              alignItems: 'center',
              display: 'flex',
              width: '80px',
            }}
          >
            <div
              className='coin-list-row-item-coin-name-text'
              style={{
                fontFamily:
                  'Bithumb Trading Sans,Arial,Malgun Gothic,sans-serif',
                fontSize: 'inherit',
                fontStyle: 'normal',
                fontWeight: 400,
                margin: 0,
                padding: 0,
              }}
            >
              <strong
                style={{
                  display: 'block',
                  fontSize: 0,
                  lineHeight: 0,
                  wordBreak: 'break-word',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginRight: '2px',
                    verticalAlign: 'top',
                  }}
                >
                  {koreanName}
                </span>
              </strong>
              <span
                style={{
                  color: '#a4a4a4',
                  display: 'block',
                  fontSize: '11px',
                  lineHeight: '16px',
                  wordBreak: 'break-all',
                }}
              >
                {orderCurrency}/{paymentCurrency}
              </span>
            </div>
          </div>
          <div
            className='coin-list-row-item-close-price'
            style={{
              textAlign: 'right',
              width: '78px',
            }}
          >
            <div style={{ display: 'inline-block', position: 'relative' }}>
              <strong
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  lineHeight: '16px',
                  position: 'relative',
                  verticalAlign: 'top',
                  wordBreak: 'break-all',
                }}
              >
                {formatNumber(ticker?.closePrice)}
              </strong>
            </div>
          </div>

          <div
            className='coin-list-row-item-chg-rate'
            style={{
              textAlign: 'right',
              width: '75px',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '12px',
                lineHeight: '16px',
                wordBreak: 'break-all',
              }}
            >
              {ticker?.chgRate || 'N/A'}
            </strong>
            <strong
              style={{
                display: 'block',
                fontSize: '11px',
                lineHeight: '16px',
                marginTop: '1px',
                wordBreak: 'break-all',
              }}
            >
              {formatNumber(ticker?.chgAmt)}
            </strong>
          </div>
          <div
            className='coin-list-row-item-value'
            style={{ paddingLeft: '4px', textAlign: 'right', width: '76px' }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '12px',
                lineHeight: '16px',
                wordBreak: 'break-all',
              }}
            >
              {formatValueToMillions(ticker?.value)}
              <span style={{ color: '#a4a4a4' }}>백만</span>
            </strong>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CoinListRow;
