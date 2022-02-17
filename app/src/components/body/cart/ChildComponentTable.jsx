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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../../features/dataUserCreateSlice";
import { Authorization } from "../../../store/AxiosLibrary";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; ////Trash
import RemoveIcon from "@mui/icons-material/Remove";
import {
  AddQualityItem,
  SubtractQualityItem,
  DeleteItem,
} from "../../../store/AxiosLibrary";

const Childcomponenttable = ({ data }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [RemoveIconBool, setRemoveIconBool] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(async () => {
    if (callback === true) {
      if (cookies.get("accessToken") !== undefined) {
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

  useEffect(async () => {
    if (data.quality === 0) {
      console.log("OK");
      setRemoveIconBool(true);
    } else {
      setRemoveIconBool(false);
    }
  }, []);

  const hiddenTrash = () => {
    ////Delete items in cart
    setRemoveIconBool(false);
  };
  const addItem = (data) => {
    const obj = {
      quality: data.quality + 1,
      id_User: data.id_User,
      _id_Product: data.id_cart,
      price: data.price,
    };
    AddQualityItem(obj);
    setCallback(true);
    setRemoveIconBool(false);
  };
  const substractItem = () => {
    const obj = {
      quality: data.quality - 1,
      id_User: data.id_User,
      _id_Product: data.id_cart,
      price: data.price,
    };
    if (data.quality === 1) {
      setRemoveIconBool(true);
    } else {
      SubtractQualityItem(obj);
    }
    setCallback(true);
  };
  const DeleteItemFunc = (data) => {
    const obj = {
      id_User: data.id_User,
      _id_Product: data.id_cart,
    };
    DeleteItem(obj);  
    setCallback(true);
  };

  return (
    <>
      {
        <Box className="bodyForm">
          <Box className="Product_Component">
            <CardMedia
              component="img"
              alt="This is product"
              className="imageCard"
              image={data.images[1].imageUrl}
              style={{ width: "100px" }}
            />
            <Box className="title_Product">
              <Typography
                className=""
                gutterBottom
                variant="small"
                component="div"
              >
                {data.foodName}
              </Typography>
              <Typography
                className=""
                gutterBottom
                variant="small"
                component="div"
              >
                {data.price} $
              </Typography>
            </Box>
          </Box>
          <Box className="button_Table">
            <Button
              onClick={() => {
                setCallback(true);
                addItem(data);
              }}
            >
              <AddIcon />
            </Button>
            {data.quality}
            {RemoveIconBool ? (
              <Button
                onClick={() => {
                  DeleteItemFunc(data) ////////////
                }}
              >
                <DeleteOutlineIcon />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  substractItem(data);
                }}
              >
                <RemoveIcon />
              </Button>
            )}
          </Box>
          <Typography
            className="total_Table"
            gutterBottom
            variant="small"
            component="div"
          >
            {Math.round(data.price * data.quality)} $
          </Typography>
        </Box>
      }
    </>
  );
};

export default Childcomponenttable;
