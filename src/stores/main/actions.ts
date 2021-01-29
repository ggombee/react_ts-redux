// import * as types from "./constants";

import ActionTypes from './constants';
import { MainImage } from './types';

interface MainImageActions {
  type: ActionTypes;
  payload: {
    imageList?: MainImage[];
  };
}

export const getImageList = (imageList: MainImage[]): MainImageActions => ({
  type: ActionTypes.GET_IMAGE_LIST,
  payload: { imageList },
});
