import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/stores/rootReducer';
import { selectMainbanner } from 'src/stores/main/actions';
import Swiper from 'react-id-swiper';
import { SwiperOptions } from 'swiper';

import { MainbannerData } from 'src/stores/main/__mocks__/mockData';
import 'src/styles/scss/main.scss';

function MainImageBanner(): React.ReactElement {
  const dispatch = useDispatch();

  const { MainbannerList } = useSelector((state: RootState) => {
    return {
      MainbannerList: state.main.MainbannerList,
    };
  });

  const selectMainbannerList = useCallback(() => {
    dispatch(selectMainbanner(MainbannerData));
  }, [dispatch]);

  useEffect(() => {
    selectMainbannerList();
  }, [selectMainbannerList]);

  const mainBannerSwiperParams: SwiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    touchMoveStopPropagation: true,
  };

  return (
    <div className="main_banner_swiper">
      <Swiper {...mainBannerSwiperParams}>
        {MainbannerList.length > 0 &&
          MainbannerList.map((banner, i) => {
            return (
              <div key={i} className="swiper-slide">
                <img
                  className="img"
                  src={banner.imgUrl}
                  alt="메인배너 이미지"
                />
              </div>
            );
          })}
      </Swiper>
    </div>
  );
}

export default MainImageBanner;
