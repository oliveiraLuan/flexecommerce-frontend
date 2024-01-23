import { useParams } from "react-router-dom";
import "./styles.css";
import ButtonSecondary from "../../../components/ButtonSecondary";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";
import FormTextArea from "../../../components/FormTextArea";
import * as categoryService from "../../../services/category-service";
import { CategoryDTO } from "../../../models/category";
import FormSelect from "../../../components/FormSelect";
import { selectStyle } from "../../../utils/select-style";

export default function ProductForm() {

  const params = useParams();

  const isEditing = params.productId !== "create";

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState({
    name: {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome do produto",
      value : "",
      message: "Insira um nome válido para o produto",
      validation : function(value : string){
          return /^.{3,80}$/.test(value);
      }
    },
    price: {
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço do produto",
      value: "",
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
      value: "",
      message: "Insira uma URL válida",
      validation : function(value : string){
        return /^.{10,80}$/.test(value);
      }
    },
    description: {
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição do produto",
      value : "",
      message: "A descrição do produto deve ter no mínimo 10 caracteres",
      validation : function(value : string){
          return /^.{10,}$/.test(value);
      }
    },
    categories : {
      id: "categories",
      name: "categories",
      placeholder: "Categorias",
      message: "Escolha no mínimo uma categoria para o produto",
      value: [],
      validation: function(value : CategoryDTO[]){
          return value.length > 0;
      }
    }
  });

  function handleInputChange(event: any){
    setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
  }

  function handleInputTurnDirty(name : string){
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  useEffect(() => {
    categoryService
    .findAll()
    .then(response => {
        setCategories(response.data);
    })
  }, []);

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
                <FormInput onTurnDirty={handleInputTurnDirty} {...formData.name} className="dsc-form-control" onChange={handleInputChange}/>
                <div className="dsc-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput onTurnDirty={handleInputTurnDirty} {...formData.price} className="dsc-form-control" onChange={handleInputChange}/>
                <div className="dsc-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput onTurnDirty={handleInputTurnDirty} {...formData.imgUrl} className="dsc-form-control" onChange={handleInputChange}/>
                <div className="dsc-form-error">{formData.imgUrl.message}</div>
              </div>
              <div>
                  <FormSelect
                    {...formData.categories}
                    className="dsc-form-control dsc-form-select-container"
                    styles={selectStyle}
                    onChange={(obj : any) => {
                        const formUpdated = forms.updateAndValidate(formData, "categories", obj);
                        setFormData(formUpdated);
                    }}
                    onTurnDirty={handleInputTurnDirty}
                    getOptionLabel={(obj) => obj.name}
                    getOptionValue={(obj) => String(obj.id)}
                    isMulti 
                    options={categories} />
                    <div className="dsc-form-error">{formData.categories.message}</div>
              </div>
              <div>
                <FormTextArea onTurnDirty={handleInputTurnDirty} {...formData.description} className="dsc-form-control dsc-textarea" onChange={handleInputChange}/>
                <div className="dsc-form-error">{formData.description.message}</div>
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
