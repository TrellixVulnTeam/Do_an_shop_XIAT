import React from 'react';
import { Box, Typography, TextField, Button, Paper,Link } from '@mui/material';
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Box className="LoginForm">
            <Box className="Form1">
                <Box className="PaperForm1">
                    <Typography
                        variant="h4"
                        className="WelcomeText"
                    >
                        Welcome !
                    </Typography>
                </Box>
                <img className="imageForm1" src="https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg" />
            </Box>
            <Box className="Form2">
                <Typography
                    variant="h5"
                    className="loginText"
                >
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="outlined"
                        className="inputLogin"
                        defaultValue="" {...register("email")}
                        // error="true"
                        // helperText="this is error"
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        className="inputLogin"
                        defaultValue="" {...register("password")}
                        // error="true"
                        // helperText="this is error"
                    />
                    <Button
                        variant="contained"
                        className="buttonLogin"
                        type="submit"
                        >Log In
                    </Button>
                    <br></br>
                    <Typography
                        variant="p"
                        className="registerText"
                    >
                        Do you have account ? 
                        <Link
                            href="/register"
                            className="registerLink"
                        >
                        Register
                        </Link>
                    </Typography>
               </form>  
            </Box>
        </Box>
    )
};

export default Login;
