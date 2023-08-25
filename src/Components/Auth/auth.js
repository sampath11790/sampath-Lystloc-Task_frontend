import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useDispatch } from "react-redux";
import { Login, Signup } from "../../store/auth-thunk";
import pic1 from "../Assets/pic1.jpg";

function SignIn() {
  const [signup, setsignup] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const Disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: data.email,
      password: data.password,
    };

    if (obj.email === "" && obj.password === "") {
      return;
    }

    if (!signup) {
      Disptach(Login(obj));
      return;
    }

    if (signup && obj.password === data.confirmpassword) {
      Disptach(Signup(obj));
    } else {
      alert("Enter a valid password");
    }
  };

  const enteredDatahandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          marginTop: 5,
          marginBottom: -10,
          color: "purple",
          textAlign: "center",
        }}
      >
        Dream big, work hard, stay focused, and surround yourself with good
        people
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: 15,

          // height: "100%",
        }}
      >
        <Box className="loginimage">
          <img src={pic1}></img>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signup ? "SignUp" : "Login"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: { sx: "90%", sm: "90%", md: "400px" },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={enteredDatahandler}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={enteredDatahandler}
              name="password"
              label="Password"
              type="password"
            />
            {signup && (
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={enteredDatahandler}
                name="confirmpassword"
                label="confirmPassword"
                type="password"
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "purple" }}
            >
              {signup ? "Signup" : " Sign In"}
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  sx={{ fontSize: 20 }}
                  onClick={() => setsignup(!signup)}
                  variant="body2"
                >
                  {signup ? "Log In" : "Don't have an account? Sign Up"}
                  {}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
