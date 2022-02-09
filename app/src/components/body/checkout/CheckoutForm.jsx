import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  Link,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box className="checkingForm">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className=""
          style={{
            textAlign:"center",
            outline: "none",
            color: "black",
            fontSize: "2.125rem",
          }}
        >
          Checkout
        </Typography>
        <TextField
          id="lastName"
          label="Email"
          defaultValue=""
          autoComplete="family-name"
          variant="standard"
          {...register("email")}
          className="line_1"
          // error="true"
          // helperText="this is error"
        />

        <TextField
          required
          id="fullName"
          name="fullName"
          label="Full name"
          variant="standard"
          {...register("fullName")}
          className="line_2"
        />
        <TextField
          required
          id="address"
          name="address"
          label="Address"
          variant="standard"
          {...register("adress")}
          className="line_1"
        />
        <TextField
          required
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          variant="standard"
          {...register("phoneNumber")}
          className="line_2"
        />
        <Button
          variant="contained"
          type="submit"
          className="button_form_checkout"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutForm;
