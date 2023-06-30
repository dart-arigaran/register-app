const Loginact = (token) => {
  //localStorage.setItem("token", token);
  console.log(token);
  return {
    type: "LOGIN",
    payload: token,
  };
};
export default Loginact;

export const Logout = () => {
  // axios
  //   .post(
  //     API_KEY_LOGOUT,
  //     {},
  //     {
  //       headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //     }
  //   )
  //   .then((r) => {
  //     localStorage.clear();
  //     console.log(r);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  return {
    type: "LOGOUT",
  };
};
