import { AuthSliceAction } from "./authslice";

const fetchWithBody = async (url, method, body) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (data.error) {
    throw new Error();
  }

  return data;
};

export const Signup = (userData) => {
  return async (dispatch) => {
    try {
      const data = await fetchWithBody(
        `http://localhost:3001/auth/signup`,
        "POST",
        userData
      );

      alert("Successfully registered your account");
      dispatch(AuthSliceAction.login());
    } catch (error) {
      alert("enter valid data");
      console.log(error.message);
    }
  };
};

export const Login = (userData) => {
  return async (dispatch) => {
    try {
      const user = await fetchWithBody(
        `http://localhost:3001/auth/login`,
        "POST",
        userData
      );

      alert("Login success");
      localStorage.setItem("token", user.Token);
      localStorage.setItem("login", true);
      dispatch(AuthSliceAction.login());
      dispatch(AuthSliceAction.setAuth({ login: "true", token: user.Token }));
    } catch (error) {
      alert("enter valid data");
      console.log(error.message);
    }
  };
};
