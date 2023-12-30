import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";
import CustomerHome from "./routes/CustomerHome";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";
import { ContextCartCount } from "./utils/context-cart";
import { useState } from "react";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import {history} from './utils/history';
import PrivateRoute from "./components/PrivateRoute";
function App() {

  const[contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <HistoryRouter history={history}>
        <Routes>
            <Route path="/" element={<CustomerHome/>}>
                <Route index element={<Catalog/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="product-details/:productId" element={<ProductDetails/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="/admin/" element={<PrivateRoute><Admin/></PrivateRoute>}>
                <Route index element={<AdminHome/>}/>
            </Route>
            <Route path="*" element={<Navigate to={"/"} />}/>
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
