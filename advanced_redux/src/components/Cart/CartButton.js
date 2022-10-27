import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const itemList = useSelector((state) => state.cart.itemList);
  let count = 0;
  itemList.forEach((item) => {
    count += item.quantity;
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
