import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
      productService.findById(Number(params.productId)).then(response => {
          setProduct(response.data);
      }); 
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary textButton="Comprar" />
          <Link to="/">
            <ButtonSecondary textButton="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
