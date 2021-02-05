import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface Mainbanner {
  id: number;
  imgUrl: string;
}

export interface MainCategory {
  id: number;
  menuName: string;
  // component: <MyStory />,
  isActive: boolean;
}

export interface MainState {
  MainbannerList: Mainbanner[];
  MainCategoryList: MainCategory[];
}

export type MainActions = ActionType<typeof actions>;
