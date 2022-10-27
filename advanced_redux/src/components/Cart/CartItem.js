import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "./states/cartState";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const incrementQuantityHandler = (event) => {
    dispatch(cartActions.increaseQuantity(title));
  };

  const decrementQuantityHandler = (event) => {
    dispatch(cartActions.decreaseQuantity(title));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementQuantityHandler}>-</button>
          <button onClick={incrementQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
