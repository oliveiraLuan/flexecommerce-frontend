import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";
import CustomerHome from "./routes/CustomerHome";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<CustomerHome/>}>
              <Route index element={<Catalog/>}/>
              <Route path="catalog" element={<Catalog/>}/>
              <Route path="product-details/:productId" element={<ProductDetails/>}/>
          </Route>
          <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
