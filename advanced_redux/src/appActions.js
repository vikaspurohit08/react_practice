import { appActions } from "./AppState";

const updateCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      appActions.setNotification({
        status: "pending",
        title: "Updating Cart",
        message: "Updating cart in server",
      })
    );

    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Caught error while updating cart");
      }

      dispatch(
        appActions.setNotification({
          status: "success",
          title: "Updated Cart",
          message: "Successfully updated cart in server",
        })
      );
    } catch (error) {
      dispatch(
        appActions.setNotification({
          status: "error",
          title: "Failed Update",
          message: "Failed to update server cart",
        })
      );
    }
  };
};

export { updateCart };
