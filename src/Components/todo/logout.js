import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { AuthSliceAction } from "../../Store/Auth/Authslice";
import { Button } from "@mui/material";
// import { LogoutOutlined } from "@mui/icons-material";
import cls from "./todo.module.css";
import { AuthSliceAction } from "../../store/authslice";

const Logout = (props) => {
  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthSliceAction.logout());
    //   AuthSliceAction.setlogOut({ login: null, token: null, logout: true })

    navigate("/login");
  };
  return (
    <>
      {/* <Button variant="contained" onClick={logoutHandler}>
        Logout
       
      </Button> */}
      <button onClick={logoutHandler} className={cls.logouttodobtn}>
        Logout
      </button>
    </>
  );
};

export default Logout;
