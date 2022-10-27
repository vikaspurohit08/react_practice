import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "./appActions";
import Cart from "./components/Cart/Cart";
import { fetchCart } from "./components/Cart/states/cartActions";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitState = true;

function App() {
  const showCart = useSelector((state) => state.app.showCart);
  const dispatch = useDispatch();
  const notificationData = useSelector((state) => state.app.notification);
  //first approach update cart whenever changed locally
  const cart = useSelector((state) => state.cart);
  const isChanged = useSelector((state) => state.isChanged);

  useEffect(() => {
    if (isInitState) {
      isInitState = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(updateCart(cart));
    }
  }, [cart, dispatch, isChanged]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Fragment>
      {notificationData && (
        <Notification
          title={notificationData.title}
          status={notificationData.status}
          message={notificationData.message}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
