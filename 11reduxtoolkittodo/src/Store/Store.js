import {configureStore} from '@redux.js/toolkit';
import todoReducer from '../features/todo/TodoSlice';

export const store = configureStore({
      reducer: todoReducer
})