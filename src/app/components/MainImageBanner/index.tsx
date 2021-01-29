import React, { useCallback, useEffect } from 'react';
import { RootState } from '../../../stores/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { imageData } from '../../../stores/main/__mocks__/mockData';
import { getImageList } from '../../../stores/main/actions';

function MainImageBanner(): React.ReactElement {
  const { bannerList } = useSelector((state: RootState) => {
    return {
      bannerList: state.mainReducer.imageList,
    };
  });

  const dispatch = useDispatch();

  const getImageBanner = useCallback(() => {
    dispatch(getImageList(imageData));
  }, [dispatch]);

  useEffect(() => {
    getImageBanner();
  }, [getImageBanner]);

  return (
    <>
      {bannerList &&
        bannerList.map(item => (
          <div key={item.id}>
            <img
              src={item.image}
              width="100%"
              height="100"
              alt={item.image}
            ></img>
          </div>
        ))}
    </>
  );
}

export default MainImageBanner;
