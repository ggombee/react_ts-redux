import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import 'src/styles/scss/main.scss';

import MainImageBanner from 'src/component/Main/MainImageBanner';
import MainPurchase from '../MainPurchase';
import MainSell from '../MainSell';

function Main(): React.ReactElement {
  const history = useHistory();
  const location = useLocation();

  const queryParams = queryString.parse(location.search);
  queryParams.index = queryParams.index || '0';

  const [isFixed, setIsFixed] = useState(false);
  const resetTop = useRef(0);

  const move = (e: any, index: number) => {
    history.push({
      pathname: '/',
      search: '?index=' + index,
    });
  };

  const onScroll = useCallback(() => {
    const target = document.getElementById('tabHeader');
    if (target) {
      const target_top = target.offsetTop;
      if (window.pageYOffset > target_top) {
        if (resetTop.current === 0) {
          //스크롤헤더 노출위치 저장
          resetTop.current = window.pageYOffset;
        }
        setIsFixed(true);
      }
      if (window.pageYOffset < resetTop.current) {
        //상단으로 올라가는 경우 숨김
        setIsFixed(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <>
      <MainImageBanner />
      <div className={'main-tab_tit ' + (isFixed && 'fix')} id="tabHeader">
        <ul>
          <li>
            <a onClick={e => move(e, 0)}>
              <button>구매하기</button>
            </a>
            <span className="margin">|</span>
            <a onClick={e => move(e, 1)}>
              <button>판매하기</button>
            </a>
          </li>
        </ul>
      </div>
      {queryParams.index === '0' ? <MainPurchase /> : <MainSell />}
    </>
  );
}

export default Main;
