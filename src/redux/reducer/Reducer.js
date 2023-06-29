const initialValue = {
  userData: [],
  token: null,
  isLoggedIn: false,
};

function Reducer(state = initialValue, action) {
  console.log("10", action);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
        // userData: action.payload.userData,
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
