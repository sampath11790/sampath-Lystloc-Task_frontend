// TodoList.js
import React from "react";
import cls from "./todo.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { editTodo, deleteTodo } from "../../store/todoSlice";
import { deleteTodo, updateTodo } from "../../store/todo-thunk";
import { editTodo, setStatus } from "../../store/todoSlice";
import { Checkbox, IconButton } from "@mui/material";

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

  const handleEdit = (id, oldtitle, status) => {
    // dispatch(updateTodo({ title: newText }, token, id));
    dispatch(editTodo({ id: id, title: oldtitle, status: status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id, token, currentpage));
    dispatch(setStatus({ curstatus: true, statusmessage: "processing.." }));
  };
  const handleCheckboxChange = (e, todo) => {
    const newStatus = e.target.checked;
    dispatch(
      updateTodo({ ...todo, status: newStatus }, token, todo.id, currentpage)
    );
    dispatch(setStatus({ curstatus: true, statusmessage: "processing.." }));
  };
  return (
    <li key={todo.id} className={cls.eachitem}>
      <div className={cls.checkboxcontainer}>
        <Checkbox
          checked={todo.status}
          onChange={(e) => handleCheckboxChange(e, todo)}
          // sx={{ bgcolor: "yellow" }}
        />
        <p className={cls.tasktitle}> {todo.title}</p>
      </div>

      <p>
        status:
        {todo.status ? (
          <span style={{ color: "green" }}>completed</span>
        ) : (
          <span style={{ color: "orange" }}>pending</span>
        )}
      </p>

      <div className={cls.buttoncontainer}>
        <IconButton
          onClick={() => handleEdit(todo.id, todo.title, todo.status)}
        >
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
