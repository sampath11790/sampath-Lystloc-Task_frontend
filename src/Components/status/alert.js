import React, { forwardRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../store/todoSlice";
let iscall = false;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertBox() {
  const dispatch = useDispatch();
  const { curstatus: isopen, statusmessage } = useSelector(
    (state) => state.todo
  );
  //   console.log(isopen);
  // const [open, setOpen] = React.useState(false);

  //setSuccessMessage,closeSuccessMessage
  let pgcolor = "";
  if (statusmessage == "success") {
    pgcolor = "success";
  } else if (statusmessage == "processing..") {
    pgcolor = "warning";
  } else if (statusmessage == "error") {
    pgcolor = "error";
  }
  useEffect(() => {
    if (iscall) {
      const timeoutid = setTimeout(() => {
        dispatch(setStatus({ curstatus: false, statusmessage: "" }));
      }, 4000);
      return () => {
        clearTimeout(timeoutid);
      };
    }
    iscall = true;
  }, [isopen]);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: "100%", position: "absolute", top: "100px", left: "30px" }}
    >
      {/* <Button variant="outlined" onClick={handleClick}>
        Open
      </Button> */}
      <Snackbar open={isopen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={pgcolor} sx={{ width: "100%" }}>
          {statusmessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
