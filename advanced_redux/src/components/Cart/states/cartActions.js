import { appActions } from "../../../AppState";
import { cartActions } from "./cartState";

const fetchCart = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/cart");
      const data = await response.json();

      dispatch(cartActions.updatedFetchedCart(data));
    } catch (error) {
      dispatch(
        appActions.setNotification({
          status: "error",
          title: "Failed to Fetch",
          message: "Failed to Fetch cart",
        })
      );
    }
  };
};

export { fetchCart };
