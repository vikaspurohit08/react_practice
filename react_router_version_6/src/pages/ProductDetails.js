import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Product Details</h1>
      <h2>{params.productId}</h2>
    </Fragment>
  );
};

export default ProductDetails;
