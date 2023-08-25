import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import SignIn from "./Components/Auth/auth";
import TodoList from "./Components/todo/todoList";
import { AuthSliceAction } from "./store/authslice";
import { getallTodo } from "./store/todo-thunk";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import AlertBox from "./Components/status/alert";

function App() {
  const Dispatch = useDispatch();

  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");
    Dispatch(AuthSliceAction.setAuth({ login: login, token: token }));
    // Dispatch(getallTodo());
  }, []);
  useEffect(() => {
    if (login == "true" && token) {
      console.log("calling  inital");
      Dispatch(getallTodo(token, 1));
      navigate("/home");
      return;
    } else {
      navigate("/login");
    }
  }, [login]);
  return (
    <div className="App">
      {/* <h1>my todod list</h1> */}
      {/* <SignIn></SignIn> */}
      {/* <TodoList></TodoList> */}
      <AlertBox></AlertBox>
      <Routes>
        <Route path="login" element={<SignIn />} />
        <Route path="home" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
