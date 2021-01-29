import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export interface MainImage {
  id: number;
  image: string;
}

export interface MainState {
    imageList:MainImage[];
}

export type  MainImageActions = ActionType<typeof actions>;