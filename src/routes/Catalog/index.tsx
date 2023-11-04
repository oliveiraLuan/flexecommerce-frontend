import HeaderClient from "../../components/HeaderClient"
import pneuImg from "../../assets/pneu.png";
import './styles.css';
import SearchBar from "../../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <HeaderClient/>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar/>

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>
                  Pneu Continental 185/65 r15
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={pneuImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 320,00</h3>
                <h4>Pneu Continental 185/65 r15</h4>
              </div>
            </div>
          </div>

          <div className="dsc-btn-next-page">Carregar mais</div>
        </section>
      </main>
    </>
  );
}
