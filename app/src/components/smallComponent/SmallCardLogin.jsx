import React from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from 'universal-cookie';

const Smallcardlogin = () => {
  const cookies = new Cookies();

  const HandleClickLogout = ()=>{
    console.log("Log out")
    cookies.remove("accessToken")
    window.location.reload(true)
  }
  return (
    <Box className="card_user_Login">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="small" component="div" className="">
            Log out
          </Typography>
          <Button onClick={()=>HandleClickLogout()}>
            <LogoutIcon className="log_out_Icon" />
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Smallcardlogin;
