// createAction 함수가 toString() 메소드를오버라이드 했기 때문이다.
import { createAction } from "@reduxjs/toolkit";

// Action Type
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";

// Action Create function
// createAction type만 넣어주어도 알아서 type 가진 action object 생성해줌
export const boardSave = createAction(MODE_SAVE, (saveData) => saveData);
export const boardRemove = createAction(MODE_REMOVE, (boardId) => boardId);
export const boardSelectRow = createAction(
  MODE_SELECT_ROW,
  (boardId) => boardId
);

// initState
const initialState = {
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
};
// 파라미터 추가로 넣어준다면 payload필드로 자동으로 들어감
// const MODE_INCREMENT = 'INCREMENT';
// const increment = createAction(MODE_INCREMENT);

// let action = increment(); // return { type: 'INCREMENT' }
// let action = increment(5); // return { type: 'INCREMENT', payload: 5 }

// 이전 소스
// // Action Type
// const MODE_REMOVE = 'REMOVE';
// const MODE_SAVE = 'SAVE';
// const MODE_SELECT_ROW = 'SELECT_ROW';

// // Action Create Function
// export const boardSave = (saveData) => ({
//     type: MODE_SAVE,
//     saveData: {
//         boardId: saveData.boardId,
//         boardTitle: saveData.boardTitle,
//         boardContent: saveData.boardContent
//     }
// });
// export const boardRemove = (boardId) => ({
//     type: MODE_REMOVE,
//     boardId: boardId
// });
// export const boardSelectRow = (boardId) => ({
//     type: MODE_SELECT_ROW,
//     boardId: boardId
// });
