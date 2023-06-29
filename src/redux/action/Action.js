import axios from "axios";
import { API_KEY_LOGIN } from "../../base";

const Loginact = (email, password) => {
  return async (dispatch) => {
    try {
      await axios.post(API_KEY_LOGIN, { email, password }).then((r) => {
        console.log("hello");
        localStorage.setItem("token", r.data);
        console.log("hello dispah");
        dispatch({
          type: "LOGIN",
          payload: token,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
};
export default Loginact;
