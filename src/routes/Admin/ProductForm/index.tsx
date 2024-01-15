import { useParams } from "react-router-dom";
import "./styles.css";
import ButtonSecondary from "../../../components/ButtonSecondary";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import { useState } from "react";

export default function ProductForm() {

  const [formData, setFormData] = useState({
    name: {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome do produto"
    },
    price: {
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço do produto",
    },
    imgUrl: {
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "URL da imagem do produto"
    }
  });

  const params = useParams();

  function handleInputChange(event: any){
    const name = event.target.name;
    const value = event.target.value;
    setFormData(forms.update(formData, name, value));
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput {...formData.name} className="dsc-form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <FormInput {...formData.price} className="dsc-form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <FormInput {...formData.imgUrl} className="dsc-form-control" onChange={handleInputChange}/>
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
