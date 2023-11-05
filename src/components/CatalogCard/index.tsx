import pneuImg from "../../assets/pneu.png";
import './styles.css';

export default function CatalogCard() {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={pneuImg} alt="Computer" />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>R$ 280,00</h3>
        <h4>Pneu Continental 185/65 r15</h4>
      </div>
    </div>
  );
}
