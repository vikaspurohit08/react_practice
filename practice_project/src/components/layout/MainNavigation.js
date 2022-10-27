import cssClasses from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={cssClasses.header}>
      <div className={cssClasses.logo}>Great Quotes</div>
      <nav className={cssClasses.nav}>
        <div>
          <ul>
            <li>
              <NavLink className={cssClasses.a} to="/quotes">
                All Quotes
              </NavLink>
            </li>
            <li>
              <NavLink className={cssClasses.a} to="quotes/add">
                Add a Quote
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
