import { configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "../components/state/authState";
import { counterReducer } from "../components/state/counterState";

// const reducerFunction = (state = initState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //for only one we can directly use counterSlice.reducer instead of obj
});

export default store;
