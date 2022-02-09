import React from "react";
import { Box, Typography, TextField, Button, Paper, Link } from "@mui/material";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="LoginForm">
      <Box className="form">
        <Typography variant="h5" className="loginText">
          Sign up
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
              // error="true"
              // helperText="this is error"
            />
          </Box>
          <Box className="coverTextField">
            <TextField
              id="standard-basic"
              label="Username"
              variant="outlined"
              type="Username"
              className="inputLogin"
              defaultValue=""
              fullWidth
              {...register("userName")}
              // error="true"
              // helperText="this is error"
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
              // error="true"
              // helperText="this is error"
            />
          </Box>
          <Box className="coverButton">
            <Button variant="inherit" className="buttonSignup">
              <Link href="/login" underline="none">
                Back
              </Link>
            </Button>
            <Button
              variant="contained"
              className="buttonSignup button_submit_signup"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
