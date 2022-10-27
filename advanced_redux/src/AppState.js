import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, notification: null };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const appActions = appSlice.actions;
const appReducer = appSlice.reducer;

export { appActions, appReducer };
