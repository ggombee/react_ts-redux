import { ActionType } from "typesafe-actions";
import * as actions from "./action";


//module과 비슷 상태값, 초기값 설정

export interface SearchGood {
    
    id: number;
    name : string;

}

export interface UserInfo{
    id: number;
    name: string;
    phone: string;

}

export interface SearchState{
    SearchGoodList : SearchGood[];
    SearchList : SearchGood[];
}
export interface UserState{
    UserInfo : UserInfo[];
}

export type SearchActions = ActionType< typeof actions>;
export type UserActions= ActionType<typeof actions>;