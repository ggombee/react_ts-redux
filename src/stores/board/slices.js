// createSlice 사용하기 위해 import
import { createSlice } from "@reduxjs/toolkit";

const boardReducer = createSlice({
  name: "boardReducer",
  initialState: {
    boards: [
      {
        boardId: 1,
        boardTitle: "제목1",
        boardContent: "내용내용내용1",
      },
      {
        boardId: 2,
        boardTitle: "제목2",
        boardContent: "내용내용내용2",
      },
      {
        boardId: 3,
        boardTitle: "제목3",
        boardContent: "내용내용내용3",
      },
      {
        boardId: 4,
        boardTitle: "제목4",
        boardContent: "내용내용내용4",
      },
      {
        boardId: 5,
        boardTitle: "제목5",
        boardContent: "내용내용내용5",
      },
    ],
    lastId: 5,
    selectRowData: {},
  },
  reducers: {
    boardSave: (state, { payload: saveData }) => {
      if (saveData.boardId === "") {
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...saveData,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      }
      return {
        ...state,
        boards: state.boards.map((data) =>
          data.boardId === saveData.boardId ? { ...saveData } : data
        ),
        selectRowData: {},
      };
    },
    boardRemove: (state, { payload: boardId }) => {
      return {
        ...state,
        boards: state.boards.filter((row) => row.boardId !== boardId),
      };
    },
    boardSelectRow: (state, { payload: boardId }) => {
      return {
        ...state,
        selectRowData: state.boards.find((row) => row.boardId === boardId),
      };
    },
  },
});

// boardSave, boardRemove, boardSelectRow Action 을 외부에서 dispatch 할 수 있게 export
export const { boardSave, boardRemove, boardSelectRow } = boardReducer.actions;

// reducer export
export default boardReducer.reducer;
