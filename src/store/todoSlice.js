// reducers/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";
let initialstate = {
  todolist: [
    { id: 1, title: "item1" },
    { id: 2, title: "item2" },
  ],
  //   initaltitle: "",
  edit: "",
  pageCount: 5,
  page: 1,
  totalcount: 10,
  currentpage: 1,
  curstatus: false,
  statusmessage: "",
};
const todosSlice = createSlice({
  name: "todos",
  initialState: initialstate,
  reducers: {
    addTodo: (state, action) => {
      state.todolist = action.payload.todo;
      state.totalcount = action.payload.totalcount;
    },
    editTodo: (state, action) => {
      state.edit = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todolist = action.payload;
    },
    setCurrentpage: (state, action) => {
      state.currentpage = action.payload;
    },
    setStatus: (state, action) => {
      state.curstatus = action.payload.curstatus;
      state.statusmessage = action.payload.statusmessage;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, setCurrentpage, setStatus } =
  todosSlice.actions;
export default todosSlice;
