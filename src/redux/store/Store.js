// import { createStore } from "react-redux";
// import Reducer from "../reducer/Reducer";

// const store = createStore(Reducer);
// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "../reducer/Reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
