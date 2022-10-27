import { Fragment } from "react";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  console.log("quote", props.quote);

  return (
    <Fragment>
      <figure className={classes.quote}>
        <p>{props.quote.text}</p>
        <figcaption>{props.quote.author}</figcaption>
      </figure>
    </Fragment>
  );
};

export default HighlightedQuote;
