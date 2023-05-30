import axios from "axios";
import { API_KEY_DELETE_EMPLOYEE } from "../../base";

export const Delete_Employee = (id) => {
  axios
    .delete(API_KEY_DELETE_EMPLOYEE + id, {
      headers: { Authorization: "Bearer" + localStorage.getItem("token") },
    })
    .then((r) => {
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};
