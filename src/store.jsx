import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./reducer/toDoReducer";
export default configureStore({
  reducer: {
    toDos: toDoReducer,
  },
});
