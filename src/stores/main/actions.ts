import ActionTypes from './constants';
import { action } from 'typesafe-actions';
import { Mainbanner, MainCategory } from './types';

type MainAction =
  | {
      type: ActionTypes.GET_MAINBANNER_LIST;
      payload: {
        MainbannerList: Mainbanner[];
      };
    }
  | {
      type: ActionTypes.GET_MAINCATEGORY_LIST;
      payload: {
        MainCategoryList: MainCategory[];
      };
    };

export const selectMainbanner = (MainbannerList: Mainbanner[]): MainAction =>
  action(ActionTypes.GET_MAINBANNER_LIST, { MainbannerList });

export const selectMainCategory = (
  MainCategoryList: MainCategory[],
): MainAction =>
  action(ActionTypes.GET_MAINCATEGORY_LIST, { MainCategoryList });
