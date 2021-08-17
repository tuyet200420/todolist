import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './todolist.reducer';

export default configureStore({
  reducer: {
    todoListReducer: todoListReducer,
  },
});