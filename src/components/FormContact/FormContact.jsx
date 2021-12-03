import { useForm, ValidationError } from "@formspree/react";
import { ContainerForm, Thanks } from "./FormContact.styled";

const FormContact = () => {
  const [state, handleSubmit] = useForm("xwkyezyg");
  if (state.succeeded) {
    return <Thanks>Gracias por contactarte con Art-Dental</Thanks>;
  }
  return (
    <ContainerForm onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Escribe tu email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        placeholder="¿Cómo te podemos ayudar?"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </ContainerForm>
  );
};

export default FormContact;
