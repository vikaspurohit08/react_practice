import { createSlice } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalAmount: 0, isChanged: false };
// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;

      const index = state.itemList.findIndex((val) => {
        return val.title === item.title;
      });

      state.isChanged = true;
      if (index === -1) {
        state.itemList.push({ ...item, quantity: 1, total: item.price });
      } else {
        state.itemList[index].quantity++;
        state.itemList[index].total += item.price;
      }

      state.amount += item.price;
    },

    increaseQuantity(state, action) {
      const index = state.itemList.findIndex((val) => {
        return val.title === action.payload;
      });
      state.isChanged = true;
      if (index === -1) {
        return;
      }
      state.itemList[index].quantity++;
      state.itemList[index].total += state.itemList[index].price;
      state.amount += state.itemList[index].price;
    },
    decreaseQuantity(state, action) {
      const index = state.itemList.findIndex((val) => {
        return val.title === action.payload;
      });
      state.isChanged = true;
      if (index === -1) {
        return;
      }

      state.itemList[index].total -= state.itemList[index].price;
      state.amount -= state.itemList[index].price;
      if (state.itemList[index].quantity === 1) {
        state.itemList.splice(index, 1);
      } else {
        state.itemList[index].quantity--;
      }
    },

    updatedFetchedCart(state, action) {
      state.amount = action.payload.totalAmount;
      state.itemList = action.payload.itemList;
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
