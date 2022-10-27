import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/welcome"></Navigate>}
          ></Route>
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" exact element={<Products />} />
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
