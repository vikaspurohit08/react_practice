import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <header>
        <h1>Products Page</h1>
      </header>
      <section>
        <ul>
          <li>
            <Link to="/products/book">Book</Link>
          </li>
          <li>
            <Link to="/products/course">Course</Link>
          </li>
          <li>
            <Link to="/products/table">Table</Link>
          </li>
          <li>
            <Link to="/products/carpet">Carpet</Link>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Products;
