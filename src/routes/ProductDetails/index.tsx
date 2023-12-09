import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import * as cartService from "../../services/cart-service";
import { ContextCartCount } from "../../utils/context-cart";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();

  const {setContextCartCount} = useContext(ContextCartCount);
  
  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.get().items.length);
      navigate("/cart");
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary textButton="Comprar" />
          </div>
          <Link to="/">
            <ButtonSecondary textButton="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
