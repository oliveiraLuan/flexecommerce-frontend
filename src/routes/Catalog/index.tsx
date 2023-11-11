import './styles.css';
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonLoadMore from "../../components/ButtonLoadMore";
import { ProductDTO } from "../../models/product";

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


export default function Catalog() {
  return (
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
          </div>

          <ButtonLoadMore textButton="Carregar mais"/>
        </section>
      </main>
  );
}
