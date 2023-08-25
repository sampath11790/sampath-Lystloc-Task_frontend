// TodoList.js
import React from "react";
import cls from "./todo.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { editTodo, deleteTodo } from "../../store/todoSlice";
import { deleteTodo } from "../../store/todo-thunk";
import { editTodo, setStatus } from "../../store/todoSlice";
import { IconButton } from "@mui/material";

import {
  Close,
  Delete,
  EditAttributesOutlined,
  PendingOutlined,
  ShoppingCartSharp,
  TextIncreaseSharp,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
function TodoListItem({ todo }) {
  const { token } = useSelector((state) => state.auth);
  const { currentpage } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleEdit = (id, oldtitle) => {
    // dispatch(updateTodo({ title: newText }, token, id));
    dispatch(editTodo({ id: id, title: oldtitle }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id, token, currentpage));
    dispatch(setStatus({ curstatus: true, statusmessage: "processing.." }));
  };

  return (
    <li key={todo.id} className={cls.eachitem}>
      <p> {todo.title}</p>

      <div className={cls.buttoncontainer}>
        <IconButton onClick={() => handleEdit(todo.id, todo.title)}>
          {/* <PendingOutlined></PendingOutlined> */}
          {/* <EditAttributesOutlined></EditAttributesOutlined> */}
          <EditIcon sx={{ color: "purple", fontSize: 35 }}></EditIcon>
          {/* Edit */}
        </IconButton>
        <IconButton onClick={() => handleDelete(todo.id)}>
          <Delete sx={{ color: "purple", fontSize: 35 }}></Delete>
          {/* Delete */}
        </IconButton>
      </div>
    </li>
  );
}

export default TodoListItem;
