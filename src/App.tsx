import { Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog";
import CustomerHome from "./routes/CustomerHome";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";
import { ContextCartCount } from "./utils/context-cart";
import { useEffect, useState } from "react";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import {history} from './utils/history';
import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/auth";
import { ContextToken } from "./utils/context-token";
import * as cartService from "./services/cart-service";
import * as authService from "./services/auth-service";

function App() {

  const[contextCartCount, setContextCartCount] = useState<number>(0);
  const[contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
      setContextCartCount(cartService.get().items.length);

      if(authService.isAuthenticated()){
          setContextTokenPayload(authService.getAccessTokenPayloadDTO());
      }
  }, []);

  return (
    <ContextToken.Provider value={{contextTokenPayload, setContextTokenPayload}}>
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
              <Route path="/admin/" element={<PrivateRoute roles={["ROLE_ADMIN"]}><Admin/></PrivateRoute>}>
                  <Route index element={<AdminHome/>}/>
              </Route>
              <Route path="*" element={<Navigate to={"/"} />}/>
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App;
