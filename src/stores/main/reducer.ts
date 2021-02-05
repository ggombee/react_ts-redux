import { MainState, MainActions } from './types';
import ActionTypes from './constants';

export const initialState: MainState = {
  MainbannerList: [],
  MainCategoryList: [],
};

function mainReducer(state: MainState = initialState, action: MainActions) {
  switch (action.type) {
    case ActionTypes.GET_MAINBANNER_LIST:
      return {
        ...state,
        MainbannerList: action.payload.MainbannerList,
      };
    case ActionTypes.GET_MAINCATEGORY_LIST:
      return {
        ...state,
        MainCategoryList: action.payload.MainCategoryList,
      };
    default:
      return state;
  }
}

export default mainReducer;
