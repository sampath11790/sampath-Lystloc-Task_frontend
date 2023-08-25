import { addTodo, setStatus } from "./todoSlice";

// import { CartSliceAction } from "./cartslice";

// Utility function to fetch data
const fetchData = async (url, token, method, obj = null) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : "empty",
    },
  };

  if (obj) {
    options.body = JSON.stringify(obj);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (data.error) {
    throw new Error(data);
  }

  return data;
};

// Action creator to fetch all products
export const getallTodo = (token, page) => {
  return async (dispatch) => {
    try {
      const data = await fetchData(
        `http://localhost:3001/todo?page=${page}`,
        token,
        "GET",
        null
      );
      console.log({ data });
      dispatch(addTodo({ todo: data.todo, totalcount: data.totalcount }));
    } catch (error) {
      console.error(error);
    }
  };
};

// Action creator to fetch todo data
export const getTodo = (token) => {
  return async (dispatch) => {
    try {
      const data = await fetchData("http://localhost:3001/todo", token, "GET");
      console.log(data);
      //   dispatch(CartSliceAction.setCartdata(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Action creator to add item
export const postTodo = (obj, token, page) => {
  return async (dispatch) => {
    try {
      dispatch(setStatus({ curstatus: true, statusmessage: "pedning!" }));
      const data = await fetchData(
        `http://localhost:3001/todo?page=${page}`,
        token,
        "POST",
        obj
      );
      console.log(data);
      // dispatch(addTodo(data.todo));
      dispatch(addTodo({ todo: data.todo, totalcount: data.totalcount }));
      dispatch(setStatus({ curstatus: true, statusmessage: "success" }));
      //   dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      console.error(error);
      dispatch(setStatus({ curstatus: true, statusmessage: "error" }));
    }
  };
};

// Action creator to remove item
export const deleteTodo = (id, token, page) => {
  return async (dispatch) => {
    try {
      dispatch(setStatus({ curstatus: true, statusmessage: "pedning!" }));
      const data = await fetchData(
        `http://localhost:3001/todo?id=${id}&page=${page}`,
        token,
        "DELETE"
      );
      console.log(data);
      // dispatch(addTodo(data.todo));
      dispatch(addTodo({ todo: data.todo, totalcount: data.totalcount }));
      dispatch(setStatus({ curstatus: true, statusmessage: "success" }));
      //   dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      console.error(error);
      dispatch(setStatus({ curstatus: true, statusmessage: "error" }));
    }
  };
};

// Action creator to update item
export const updateTodo = (obj, token, id, page) => {
  return async (dispatch) => {
    try {
      dispatch(setStatus({ curstatus: true, statusmessage: "pedning!" }));
      const data = await fetchData(
        `http://localhost:3001/todo?id=${id}&page=${page}`,
        token,
        "PATCH",
        obj
      );
      console.log(data);
      // dispatch(addTodo(data.todo));
      dispatch(addTodo({ todo: data.todo, totalcount: data.totalcount }));
      dispatch(setStatus({ curstatus: true, statusmessage: "success" }));
      //   dispatch(CartSliceAction.setacallcart());
    } catch (error) {
      console.error(error);
      dispatch(setStatus({ curstatus: true, statusmessage: "error" }));
    }
  };
};



// export const updateTodoStatus=