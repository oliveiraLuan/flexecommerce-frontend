import { useContext, useState } from "react";
import * as authService from "../../services/auth-service";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../utils/context-token";
import * as forms from "../../utils/forms";
import FormInput from "../../components/FormInput";

export default function Login() {
  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);

  const [submitFail, setSubmitFail] = useState(false);

  const [formData, setFormData] = useState({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      message: "Insira um e-mail válido",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      }
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  function handleInputChange(event: any){
    setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
  }
  function handleInputTurnDirty(name : string){
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setSubmitFail(false);

    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if(forms.hasAnyInvalid(formDataValidated)){
      setFormData(formDataValidated);
      return;
    }

    authService
      .loginRequest(forms.toValues({...formData}))
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayloadDTO());
        navigate("/cart");
      })
      .catch(() => {
        setSubmitFail(true);
      });
  }
  return (
    <>
      <main>
        <section id="login-section" className="dsc-container">
          <div className="dsc-login-form-container">
            <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="dsc-form-controls-container">
                <div>
                  <FormInput
                    { ...formData.username }
                    className="dsc-form-control"
                    onChange={handleInputChange}
                    onTurnDirty={handleInputTurnDirty}
                  />
                  <div className="dsc-form-error">{formData.username.message}</div>
                </div>
                <div>
                  <FormInput
                    { ...formData.password }
                    className="dsc-form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              { submitFail && 
                <div className="dsc-form-global-error">
                  Usuário ou senha inválidos
                </div>
              }
              <div className="dsc-login-form-buttons dsc-mt20">
                <button type="submit" className="dsc-btn dsc-btn-blue">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
