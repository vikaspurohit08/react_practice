import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes"></Navigate>}></Route>
        <Route path="/quotes" element={<AllQuotes></AllQuotes>}></Route>
        <Route path="/quotes/add" element={<AddQuote></AddQuote>}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetail></QuoteDetail>}>
          <Route path={`comments`} element={<Comments></Comments>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
