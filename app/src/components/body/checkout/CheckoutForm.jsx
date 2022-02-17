import React, { useState, useEffect } from "react";
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
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Isloading from "../isLoading/IsLoading";
import { PostOrder } from "../../../store/AxiosLibrary";
import Cookies from "universal-cookie";
import { Authorization } from "../../../store/AxiosLibrary";
import { getDataUser } from "../../../features/dataUserCreateSlice";
import { handleOpenSuccess } from "../../../features/HandleClickToAppearCheckoutForm";
import Successform from "../smallComponent/SuccessForm";

/////////////////////////////////////////////////////////////////////////////////////////

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user.payload);
  const [callback, setCallback] = useState(false);
  const [SuccessForm, setSuccessForm] = useState(false);
  /////Submit checkout form

  ////////Test success form

  const onSubmit = (data) => {
    const idCart = uuidv4();
    const { email, fullName, address, phoneNumber } = data;
    if (
      email !== "" &&
      fullName !== "" &&
      address !== "" &&
      phoneNumber !== "" &&
      parseInt(phoneNumber).toString().length === phoneNumber.length &&
      phoneNumber.length === 10
    ) {
      const _id = user.dataUser._id;
      const date = Date.now();
      const obj = {
        idCart: idCart,
        email: email,
        fullName: fullName,
        address: address,
        phoneNumber: parseInt(phoneNumber),
        _id: _id,
        date: date,
      };
      PostOrder(obj).then((res) => console.log(res));
      setCallback(true);
      dispatch(handleOpenSuccess());
      setSuccessForm(true);
    }
  };

  useEffect(async () => {
    if (callback === true) {
      ///
      if (cookies.get("accessToken") != undefined) {
        const headers = {
          Authorization: "Bearer " + cookies.get("accessToken"),
        };
        await Authorization({}, { headers: headers }).then(async (res) => {
          await dispatch(getDataUser(res.data));
        });
      }
      setCallback(false);
    }
  });
  if (user === undefined) return <Isloading />;
  if (user.dataUser.cart.length === 0) {
    if (SuccessForm === false) {
      navigate("/cart");
    }
  }
  let subTotal = 0;
  user.dataUser.cart.map((e) => {
    subTotal = e.quality * e.price;
  });

  const handleCloseSuccess = () => {
    setSuccessForm(false);
  };

  return (
    <Box className="checkingForm">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className=""
          style={{
            textAlign: "center",
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
          defaultValue={user.dataUser.email}
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
          {...register("address")}
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
        <Box className="Container_Submit_SubTotal">
          <Button
            variant="contained"
            type="submit"
            className="button_form_checkout"
          >
            Submit
          </Button>
          <Box className="container_subTotal_Text">
            <Typography
              className="subTotal_Text"
              gutterBottom
              variant="h6"
              component="div"
            >
              Subtotal : {subTotal} $
            </Typography>
          </Box>
        </Box>
      </form>
      <Successform handleCloseSuccess={handleCloseSuccess} />
    </Box>
  );
};

export default CheckoutForm;
