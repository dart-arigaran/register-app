const initialValue = {
  userData: [],
  token: null,
  isLoggedIn: false,
  user: null,
};

function Reducer(state = initialValue, action) {
  switch (action.type) {
    case "LOGIN":
      console.log("hello reducer");
      return {
        token: action.payload,
        isLoggedIn: true,
        userData: action.payload.userData,
      };
    default:
      state;
      break;
  }
}

export default Reducer;
