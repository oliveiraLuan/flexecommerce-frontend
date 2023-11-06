import HeaderClient from "../../components/HeaderClient"
import './styles.css';
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonLoadMore from "../../components/ButtonLoadMore";

export default function Catalog() {
  return (
    <>
      <HeaderClient/>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
          </div>

          <ButtonLoadMore textButton="Carregar mais"/>
        </section>
      </main>
    </>
  );
}
