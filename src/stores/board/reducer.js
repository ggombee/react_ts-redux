import { createReducer } from "@reduxjs/toolkit";

import {
  MODE_REMOVE,
  MODE_SAVE,
  MODE_SELECT_ROW,
  initialState,
} from "./actions";

export default createReducer(initialState, {
  [MODE_REMOVE]: (state, { payload: boardId }) => {
    return {
      ...state,
      boards: state.boards.filter((row) => row.boardId !== boardId),
    };
  },
  [MODE_SAVE]: (state, { payload: saveData }) => {
    if (saveData.boardId === "") {
      return {
        lastId: state.lastId + 1,
        boards: state.boards.concat({ ...saveData, boardId: state.lastId + 1 }),
        selectRowData: {},
      };
    } else {
      return {
        ...state,
        boards: state.boards.map((data) =>
          data.boardId === saveData.boardId ? { ...saveData } : data
        ),
        selectRowData: {},
      };
    }
  },
  [MODE_SELECT_ROW]: (state, { payload: boardId }) => {
    return {
      ...state,
      selectRowData: state.boards.find((row) => row.boardId === boardId),
    };
  },
});

// export default function boardReducer(state=initialState, action) {
//     switch(action.type) {
//         case MODE_REMOVE:
//             return { ...state, boards: state.boards.filter(row => row.boardId !== action.boardId) };
//         case MODE_SAVE:
//             if(action.saveData.boardId === '') {
//                 return { lastId: state.lastId+1, boards: state.boards.concat({ ...action.saveData, boardId: state.lastId+1 }), selectRowData: {} };
//             } else {
//                 return { ...state, boards: state.boards.map(data => data.boardId === action.saveData.boardId ? {...action.saveData}: data), selectRowData: {} };
//             }
//         case MODE_SELECT_ROW:
//             return { ...state, selectRowData: state.boards.find(row => row.boardId === action.boardId) };
//         default:
//             return state;
//     }
// };
