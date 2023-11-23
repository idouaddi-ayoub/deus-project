import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000", //backends locl host
  timeout: 1000,
  headers: {},
});
