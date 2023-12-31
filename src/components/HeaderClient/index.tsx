import { Link } from "react-router-dom";
import "./styles.css";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.svg";
import { hasAnyRoles } from "../../services/auth-service";
export default function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to="/">
          <h1>Flex Autopeças</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            { hasAnyRoles(["ROLE_ADMIN"]) &&
              <div className="dsc-menu-item">
                <Link to={"/admin"}>
                  <img src={iconAdmin} alt="Ícone para página de admin" />
                </Link>
              </div>
            }
            <div className="dsc-menu-item">
              <Link to="/cart">
                <CartIcon />
              </Link>
            </div>
          </div>
          <Link to="/login">Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
