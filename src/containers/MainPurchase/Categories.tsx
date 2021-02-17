import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import { RootState } from 'src/stores/rootReducer';
import { MainCategoryData } from 'src/stores/main/__mocks__/mockData';
import { selectMainCategory } from 'src/stores/main/actions';

export function Categories(): React.ReactElement {
  const dispatch = useDispatch();

  const { CategoriesList } = useSelector((state: RootState) => {
    return {
      CategoriesList: state.main.MainCategoryList,
    };
  });

  const selectMainCategoryList = useCallback(() => {
    dispatch(selectMainCategory(MainCategoryData));
  }, [dispatch]);

  useEffect(() => {
    selectMainCategoryList();
  }, [selectMainCategoryList]);

  // 카테고리 스와이퍼 옵션 설정
  const categoriesSwiperParams = {
    slidesPerView: 3.5,
    touchMoveStopPropagation: true,
  };

  return (
    <div className="main_category_swiper">
      <Swiper {...categoriesSwiperParams}>
        {CategoriesList.length > 0 &&
          CategoriesList.map((tab, i) => {
            return (
              <div key={i} className="swiper-slide">
                <button>{tab.menuName}</button>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
}
