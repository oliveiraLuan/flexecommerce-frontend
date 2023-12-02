import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";
import CustomerHome from "./routes/CustomerHome";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CustomerHome/>}>
              <Route index element={<Catalog/>}/>
              <Route path="catalog" element={<Catalog/>}/>
              <Route path="product-details/:productId" element={<ProductDetails/>}/>
              <Route path="cart" element={<Cart/>}/>
          </Route>
          <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
