import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector, useDispatch } from "react-redux";
import { handleCloseSuccess } from "../../../features/HandleClickToAppearCheckoutForm";
import { textAlign } from "@mui/system";

///////////////////////////////////////////////////////////////////////////////////////
const Successform = (props) => {
  const dispatch = useDispatch();
  const openSuccess = useSelector((state) => state.handleClick.openSuccess);

  const HandleClose = () => {
    dispatch(handleCloseSuccess());
    props.handleCloseSuccess()
  };

  return (
    <Modal open={openSuccess} onClose={HandleClose} className="SuccessForm">
      <Card classname="form">
        <Box className="elementCard">
          <CheckCircleIcon className="icon_success" />
        </Box>
        <Box className="elementCard">
          <Box className="text_Success text"> Success</Box>
        </Box>
        <Box className="elementCard">
          <Box className="text">Thank you for choosing our product !!!</Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default Successform;
