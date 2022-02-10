import axios from "axios";
//Using for post ,put , delete

const port = "http://localhost:5000";

const RequestLogin = (data) => axios.post(`${port}/api/auth/login`, data);
const Authorization = (emp,data) => axios.post(`${port}/api/auth/checkToken`, emp,data);

export { RequestLogin, Authorization };

