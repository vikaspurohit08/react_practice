import { Fragment, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: quoteData,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && !quoteData.text) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  return (
    <Fragment>
      <HighlightedQuote quote={quoteData}></HighlightedQuote>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default QuoteDetail;
