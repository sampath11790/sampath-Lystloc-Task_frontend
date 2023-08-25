// AddTodo.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTodo, updateTodo } from "../../store/todo-thunk";
import cls from "./todo.module.css";
import Logout from "./logout";
import { setStatus } from "../../store/todoSlice";
// import { addTodo } from "./reducers/todosSlice";
let count = 0;
function AddTodo() {
  const { edit, currentpage } = useSelector((state) => state.todo);
  const { token } = useSelector((state) => state.auth);
  const [newTodo, setNewTodo] = useState("");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newTodo.trim() && update != true) {
      dispatch(
        postTodo(
          {
            title: newTodo,
          },
          token,
          currentpage
        )
      );
      dispatch(setStatus({ curstatus: true, statusmessage: "processing.." }));
      setNewTodo("");
    } else {
      dispatch(updateTodo({ title: newTodo }, token, edit.id, currentpage));
      dispatch(
        setStatus({ curstatus: true, statusmessage: "processing....." })
      );
      setNewTodo("");
      setUpdate(false);
    }
  };
  useEffect(() => {
    if (edit) {
      // console.log(count);
      setNewTodo(edit.title);
      setUpdate(true);
    }
  }, [edit]);
  return (
    <div className={cls.inputcontainer}>
      {/* <h1>Todo List</h1> */}
      <input
        className={cls.inputelement}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div>
        <button onClick={handleAdd} className={cls.addtodobtn}>
          {update == true ? "Update" : "Add Todo"}
        </button>
        <Logout></Logout>
      </div>
    </div>
  );
}

export default AddTodo;
