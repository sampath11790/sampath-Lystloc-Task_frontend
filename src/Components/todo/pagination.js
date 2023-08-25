import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
// import { getallExpense } from "../../Store/Expense-thunk";
// import DropDownExpense from "../Dropdown/Dropdown";
import { Box } from "@mui/material";
import { getallTodo } from "../../store/todo-thunk";
import { setCurrentpage } from "../../store/todoSlice";

// import { ExpenseSliceAction } from "../../Store/ExpenseSlice";
let iscall = false;
export default function PaginationList({ totalcount }) {
  const [Page, setPage] = useState(1);
  //   const [pageCount, setPagecount] = useState(0);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (iscall) {
      dispatch(getallTodo(token, Page));

      return;
    }
    iscall = true;
  }, [Page]);

  const pageHandler = (e, value) => {
    e.preventDefault();

    setPage(value);
    dispatch(setCurrentpage(value));
  };
  return (
    <Box display={"flex"} flexDirection={"row"}>
      {/* <DropDownExpense
        totalcount={totalcount}
        page={Page}
        pageCount={pageCount}
        setPagecount={setPagecount}
      ></DropDownExpense> */}
      <Stack spacing={15}>
        <Pagination
          color={"secondary"}
          size="large"
          defaultPage={1}
          count={totalcount}
          onChange={pageHandler}
          page={Page || 0}
          variant="outlined"
          shape="rounded"
        ></Pagination>
      </Stack>
    </Box>
  );
}
