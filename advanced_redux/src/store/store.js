import { appReducer } from "../AppState";
import { cartReducer } from "../components/Cart/states/cartState";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  },
});

export default store;
