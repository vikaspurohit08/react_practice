import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const queryParams = new URLSearchParams(routeLocation.search);
  const sortedQuotes = sortQuotes(
    props.quotes,
    queryParams.get("sort") === "asc"
  );
  const sortingType =
    queryParams.get("sort") === "asc" ? "Ascending" : "Descending";

  const sortingHandler = () => {
    // routeHistory.push(
    //   `${routeLocation.pathname}?sort=${
    //     queryParams.get("sort") === "asc" ? "desc" : "asc"
    //   }`
    // );
    navigate({
      pathname: routeLocation.pathname,
      search: `?sort=${queryParams.get("sort") === "asc" ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {`${sortingType}`}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
