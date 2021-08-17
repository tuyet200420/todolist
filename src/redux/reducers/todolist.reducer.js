import { createReducer } from '@reduxjs/toolkit';
const initialState = {
    taskList: [],
}

const todoListReducer = createReducer(initialState, {
  'CREATE_TODOLIST': (state, action) => {
    const { data } = action.payload;
    console.log("🚀 ~ file: todolist.reducer.js ~ line 9 ~ data", data)
    return {
      ...state,
      taskList: [
        data,
        ...state.taskList,
      ],
    };
  },
  'DELETE_TODOLIST': (state, action) => {
    const { id } = action.payload;
      const newTaskList = [...state.taskList];
      const productIndex = newTaskList.findIndex((product) => product.id === id);
      newTaskList.splice(productIndex, 1);
      return {
        ...state,
        taskList: newTaskList,
      };
    },
  
});

export default todoListReducer;