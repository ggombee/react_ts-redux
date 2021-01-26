import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageData } from "../../../stores/main/__mocks__/mockData";
import { getImageList } from "../../../stores/main/actions";

function MainImageBanner() {
  const { bannerList } = useSelector((state) => {
    return {
      bannerList: state.mainReducer.imageItem,
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
        bannerList.map((item) => (
          <div key={item.id}>
            <img src={item.image} width="100%" height="100" alt={item.id}></img>
          </div>
        ))}
    </>
  );
}

export default MainImageBanner;
