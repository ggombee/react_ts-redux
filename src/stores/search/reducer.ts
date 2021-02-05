import { SearchState, SearchActions } from "./types";
import ActionTypes from "./constants";


//초기값 지정.
export const initialState: SearchState ={
    SearchList:[],
    SearchGoodList:[],
};





function searchReducer(state : SearchState = initialState, action : SearchActions) {
    switch (action.type){
        case ActionTypes.GET_SEARCHGOOD_LIST:
            return{
                ...state,
                SearchGoodList : action.payload.SearchGoodList,
            };
           
        case ActionTypes.GET_SEARCH_LIST:
            return{
                ...state,
                SearchList : action.payload.SearchList,
            };
            default:
                return state;

    }
}




export default searchReducer;