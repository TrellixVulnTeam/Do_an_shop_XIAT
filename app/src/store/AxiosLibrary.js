import axios from "axios";
//Using for post ,put , delete

const port = "http://localhost:5000";

//////////////////////////User///////////////////////
const RequestSignup = (data) => axios.post(`${port}/api/auth/register`, data);
const RequestLogin = (data) => axios.post(`${port}/api/auth/login`, data);
const Authorization = (emp, data) =>
  axios.post(`${port}/api/auth/checkToken`, emp, data); //body headers

////////////////Cart/////////////////////////////
//id ,data -->({a,b}) //Array in cart [{id:"",name:""}]

const addToCart = (data) => axios.put(`${port}/api/method/addToCart`, data);
//delete Cart
const DeleteItem = (data) => {
  axios.put(`${port}/api/method/deleteItems`, data);
};

//Update Cart
const AddQualityItem = (data) => axios.put(`${port}/api/method/addItems`, data);
const SubtractQualityItem = (data) =>
  axios.put(`${port}/api/method/DecreaseItems`, data);
///add data into Order 
const PostOrder = (data) => axios.post(`${port}/api/method/addOrder`, data);

export {
  RequestSignup,
  RequestLogin,
  Authorization,
  addToCart,
  AddQualityItem,
  SubtractQualityItem,
  DeleteItem,
  PostOrder,
};
