Action;

// export const Loginact = () => {
//   // let token;
//   // await axios
//   //   .post(API_KEY_LOGIN, { email, password })
//   //   .then((r) => {
//   //     localStorage.setItem("token", r.data);
//   //     token = r.data;
//   //   })
//   //   .catch((e) => {
//   //     "error";
//   //   });
//   return {
//     type: "LOGIN",
//     payload: token,
//   };
// };

import { Login } from "@mui/icons-material";
import { useActionData } from "react-router-dom";

Login;

// const loginAction = (e) => {
//   e.preventDefault();
//   dispatch(Loginact(email, password));

//   navigate("/");
//   alert("successfully login");
// };

// const loginAction = async (e) => {
//   setValidationErrors({});
//   e.preventDefault();
//   let payload = {
//     email: email,
//     password: password,
//   };
//   await axios
//     .post(API_KEY_LOGIN, payload)
//     .then((r) => {
//       localStorage.setItem("token", r.data);
//       dispatch(Loginact(r.data.token));
//       // dispatch(Loginact(email, password));
//       navigate("/");
//       alert("successfully login");
//     })

//     .catch((e) => {
//       //   if (e.response.data.errors != undefined) {
//       //     setValidationErrors(e.response.data.errors);
//       //   }
//       //   if (e.response.data.error != undefined) {
//       //     setValidationErrors(e.response.data.error);
//       //   }
//     });
// };

// const loginAction = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.post(API_KEY_LOGIN, { email, password }).then((response) => {
//       const token = response.data;
//       localStorage.setItem("token", token);
//       dispatch(Loginact(token));
//       navigate("/");
//       alert("successfully login");
//     });
//     // const response = await axios.post(API_KEY_LOGIN, { email, password });
//     // console.log("console");
//     // const token = response.data.token;
//     // console.log(token);
//     // localStorage.setItem("token", token);
//     // dispatch(Loginact(token));
//   } catch (e) {
//     // if (e.response.data.errors != undefined) {
//     //   setValidationErrors(e.response.data.errors);
//     // }
//     // if (e.response.data.error != undefined) {
//     //   setValidationErrors(e.response.data.error);
//     // }
//   }
// };
