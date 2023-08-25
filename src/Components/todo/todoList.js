// TodoList.js
import React, { useState } from "react";
import cls from "./todo.module.css";
import { useSelector, useDispatch } from "react-redux";

import TodoListItem from "./todoListItem";
import AddTodo from "./addtodo";
import PaginationList from "./pagination";
import { LocalLibrary } from "@mui/icons-material";

function TodoList() {
  const { todolist, totalcount } = useSelector((state) => state.todo);

  return (
    <div className={cls.maincontainer}>
      <div className={cls.headercontainer}>
        <h1>Todo List</h1>
        <p>
          <LocalLibrary sx={{ fontSize: 40, color: "purple" }}></LocalLibrary>
        </p>
      </div>
      <AddTodo></AddTodo>

      <ul className={cls.ulcontainer}>
        {todolist.length > 0 &&
          todolist.map((todo) => (
            <TodoListItem key={todo.id} todo={todo}></TodoListItem>
          ))}
        {todolist.length == 0 && <h2>Your task is empty add task</h2>}
      </ul>
      <PaginationList totalcount={totalcount}></PaginationList>
    </div>
  );
}

export default TodoList;
