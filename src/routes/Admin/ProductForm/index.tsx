import { useParams } from "react-router-dom";
import "./styles.css";
import ButtonSecondary from "../../../components/ButtonSecondary";
import { Link } from "react-router-dom";

export default function ProductForm() {
  const params = useParams();

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Nome"
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Preço"
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Imagem"
                />
              </div>
              <div></div>
              <div>
                <textarea
                  className="dsc-form-control dsc-textarea"
                  placeholder="Descrição"
                ></textarea>
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <ButtonSecondary textButton="Cancelar" />
              </Link>
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
