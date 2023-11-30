import axios from "axios";
import { create } from "domain";

export default axios.create({
  baseURL: "http://localhost:3000", //backends local host
  timeout: 1000,
  headers: {},
});
