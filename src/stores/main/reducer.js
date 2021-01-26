import * as types from "./constants";

export const initialState = {
  imageItem: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_IMAGE_LIST:
      return {
        ...state,
        imageItem: action.payload.imageItem,
      };
    default:
      return state;
  }
}

export default mainReducer;
