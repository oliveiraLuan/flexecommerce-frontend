import { useParams } from "react-router-dom";
import "./styles.css";
import ButtonSecondary from "../../../components/ButtonSecondary";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";

export default function ProductForm() {

  const params = useParams();

  const isEditing = params.productId !== "create";

  const [formData, setFormData] = useState({
    name: {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome do produto",
      value : ""
    },
    price: {
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço do produto",
      value: 0,
      validation : function(value : any){
          return Number(value) > 0;
      },
      message: "Insira um valor positivo"
    },
    imgUrl: {
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "URL da imagem do produto",
      value: ""
    }
  });

  function handleInputChange(event: any){
    const name = event.target.name;
    const value = event.target.value;
    setFormData(forms.update(formData, name, value));
  }

  useEffect(() => {
      if(isEditing){
        productService.findById(Number(params.productId)).then(response => {
            const formUpdated = forms.updateAll(formData, response.data);
            setFormData(formUpdated);
        });
      }
  }, []);

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
