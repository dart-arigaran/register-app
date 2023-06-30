import axios from "axios";

const api = axios.create({
  baseURL: "https://apidemo.demodooms.com/api/", // Replace with your API base URL
});

export default api;
