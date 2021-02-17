import ActionTypes from "./constants";
import{action} from "typesafe-actions";
import {SearchGood} from "./types";


// 액션함수 선언
type SearchAction =
|{
    type : ActionTypes.GET_SEARCH_LIST;
    payload:{
        SearchList: SearchGood[];
    };
}
|{
    type : ActionTypes.GET_SEARCHGOOD_LIST;
    payload:{
        SearchGoodList: SearchGood[];
    };
};


export const selectSearchList = (SearchGoodList: SearchGood[]): SearchAction=>
action(ActionTypes.GET_SEARCHGOOD_LIST, {SearchGoodList});

export const selectSearchList2 =(SearchList: SearchGood[]) : SearchAction=>
action(ActionTypes.GET_SEARCH_LIST, {SearchList} );