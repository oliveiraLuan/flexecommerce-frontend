import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import "./styles.css";

const product: ProductDTO = {
  id: 1,
  name: "Pneu Continental 185/65 r15",
  description:"Aumente a quilometragem e melhore o desempenho com o Pneu Conti 185/65 R15 ContiPowerContact 2 88H. Desenvolvido com tecnologia avançada, este pneu oferece durabilidade excepcional e desempenho superior em todas as condições de estrada.",
  imgUrl: "https://cdn.b4c.inf.br/storage/magili/1000/pneu-conti-18565-r15-contipowercontac-2-88h-1647528435.png",
  price: 280.0,
  categories: [
    {
      id: 1,
      name: "Carros",
    },
    {
      id: 2,
      name: "Pneus"
    }
  ],
};

export default function ProductDetails() {
  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary textButton="Comprar" />
            <ButtonSecondary textButton="Início" />
          </div>
        </section>
      </main>
  );
}
