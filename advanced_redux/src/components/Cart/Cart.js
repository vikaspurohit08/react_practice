import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const itemList = useSelector((state) => state.cart.itemList);

  const cartItems = itemList.map((eachItem) => {
    return <CartItem key={eachItem.title} item={eachItem}></CartItem>;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
