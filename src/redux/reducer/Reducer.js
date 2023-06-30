const initialValue = {
  userData: [],
  token: "",
  //isLoggedIn: false,
};

function Reducer(state = initialValue, action) {
  switch (action.type) {
    case "LOGIN":
      console.log("10", action);
      return {
        ...state,
        token: action.payload,
        //isLoggedIn: true,

        //userData: action.payload.userData,
      };

    case "LOGOUT":
      return {
        isLoggedIn: false,
        // user: null,
        // error: null
      };
    default:
      state;
      break;
  }
}

export default Reducer;
