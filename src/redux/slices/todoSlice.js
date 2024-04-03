import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  initialState: { todo: [{ id: nanoid(), title: "Test" }] },
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      console.log(state.todo);
      console.log(action);
      console.log(action.payload);
      state.todo.push({ id: nanoid(), ...action.payload });
      console.log(state.todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
