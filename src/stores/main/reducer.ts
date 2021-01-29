import ActionsTypes from './constants';

import { MainState, MainImageActions } from './types';

export const initialState = {
  imageList: [],
};

// function mainReducer(state = initialState, action) {
//   switch (action.type) {
//     case types.GET_IMAGE_LIST:
//       return {
//         ...state,
//         imageItem: action.payload.imageItem,
//       };
//     default:
//       return state;
//   }
// }

function mainReducer(
  state: MainState = initialState,
  action: MainImageActions,
): MainState {
  switch (action.type) {
    case ActionsTypes.GET_IMAGE_LIST:
      return {
        imageList: action.payload.imageList || [],
      };
    default:
      return state;
  }
}

export default mainReducer;
