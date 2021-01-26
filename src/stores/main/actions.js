// import ActionTypes from "./constants";
import * as types from "./constants";

export const getImageList = (imageItem) => ({
  type: types.GET_IMAGE_LIST,
  payload: { imageItem },
});
