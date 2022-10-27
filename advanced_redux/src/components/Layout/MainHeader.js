import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { appActions } from "../../AppState";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const cartButtonClickHandler = (event) => {
    dispatch(appActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartButtonClickHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
