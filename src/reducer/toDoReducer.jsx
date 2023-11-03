import { createSlice } from "@reduxjs/toolkit";

const TO_DO_LIST_KEY = "toDoList";

const initialState = JSON.parse(localStorage.getItem(TO_DO_LIST_KEY)) || [];

const todoSlice = createSlice({
  name: "toDoReducer",
  initialState,
  reducers: {
    toDoAdded: (state, action) => {
      const newToDos = [action.payload, ...state];
      localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(newToDos));
      return newToDos;
    },
    toDoDeleted: (state, action) => {
      const newTodos = state.filter(
        (toDo) => toDo.id !== parseInt(action.payload),
      );
      localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(newTodos));
      return newTodos;
    },
    toDoToggle: (state, action) => {
      const newTodos = state.map((toDo) => {
        if (toDo.id === parseInt(action.payload)) {
          toDo.isDone = !toDo.isDone;
        }
        return toDo;
      });
      localStorage.setItem(TO_DO_LIST_KEY, JSON.stringify(newTodos));
    },
  },
});

export const { toDoToggle, toDoAdded, toDoDeleted } = todoSlice.actions;

export const selectToDos = (state) => state.toDos;

export default todoSlice.reducer;
