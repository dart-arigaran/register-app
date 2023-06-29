import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { API_KEY_LOGIN, API_KEY_LOGOUT } from "../../base";

// export const login = (token) => {
//   return {
//     type: "LOGIN",
//     payload: token,
//   };
// };

export const Loginact = (email, password) => {
  let token;
  axios
    .post(API_KEY_LOGIN, { email, password })
    .then((r) => {
      localStorage.setItem("token", r.data);
      token = r.data;
    })
    .catch((e) => {
      "error";
    });
  return {
    type: "LOGIN",
    payload: token,
  };
};

export const Logout = () => {
  axios
    .post(
      API_KEY_LOGOUT,
      {},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    )
    .then((r) => {
      localStorage.clear();
      console.log(r);
    })
    .catch((e) => {
      console.log(e);
    });
  return {
    type: "LOGOUT",
  };
};
