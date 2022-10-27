import axios from "axios";
import api from "./api";

const loginApi = (data) => {
  return axios
    .get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true })
    .then(() => {
      return api.post("login", data);
    });
};

export default loginApi;
