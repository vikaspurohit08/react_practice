import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuote = (quote) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuote}
    ></QuoteForm>
  );
};

export default AddQuote;
