import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

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
