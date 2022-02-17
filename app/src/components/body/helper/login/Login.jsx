import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Paper, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { RequestLogin } from "../../../../store/AxiosLibrary";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  //2--->get Error from server side////3---->save accessToken in cookie
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [conditionForErrPassword, setConditionForErrPassword] = useState(false);
  const [conditionForErrEmail, setConditionForErrEmail] = useState(false);
  //1--->Handle form (react-hook-form)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    RequestLogin(data).then((res) => {
      const resData = res.data;
      if (!res.data.success) {
        if (resData.err_email.length != 0) {
          setConditionForErrEmail(true);
          setErrEmail(resData.err_email[0]);
        }
        if (resData.err_password.length != 0) {
          setConditionForErrPassword(true);
          setErrPassword(resData.err_password[0]);
        }
      } else {
        //Assign error is empty
        setConditionForErrEmail(false);
        setErrEmail("");
        setConditionForErrPassword(false);
        setErrPassword("");

        //Save accessToken in cookie
        const accessToken = resData.accessToken;
        cookies.set("accessToken", accessToken);
        navigate("/")
        window.location.reload(true)
      }
    });
  };
  //Check acessToken to redirect to "/"

  return (
    <Box className="LoginForm">
      <Box className="form">
        <Typography variant="h5" className="loginText">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="coverTextField">
            <TextField
              id="standard-basic"
              label="Email"
              variant="outlined"
              className="inputLogin"
              defaultValue=""
              fullWidth
              {...register("email")}
              error={conditionForErrEmail}
              helperText={errEmail}
            />
          </Box>
          <Box className="coverTextField">
            <TextField
              id="standard-basic"
              label="Password"
              variant="outlined"
              type="password"
              className="inputLogin"
              defaultValue=""
              fullWidth
              {...register("password")}
              error={conditionForErrPassword}
              helperText={errPassword}
            />
          </Box>
          <Button variant="contained" className="buttonLogin" type="submit">
            Submit
          </Button>
          <br></br>
          <Typography variant="p" className="registerText">
            Do you have account ?
            <Link href="/signup" className="registerLink">
              Sign up
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
