import axios from "axios";
//Using for post ,put , delete method

const url = "http://localhost:5000/api/auth/login";

const RequestLogin = (data) => axios.post(url, data);

export { RequestLogin };
