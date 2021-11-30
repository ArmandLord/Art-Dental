import {
  ContainerWelcome,
  MarginWelcome,
  ContainerWelcomeInfo,
} from "./Welcome.styled";

const Welcome = () => {
  return (
    <ContainerWelcome>
      <MarginWelcome>
        <ContainerWelcomeInfo>
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638244437/Art-Dental/FB_IMG_1638244051914_t1xili.jpg"
            alt="Gerardo Fuentes Pérez Dentista"
          />
          <h4>Dr. Gerardo Fuentes Pérez</h4>
        </ContainerWelcomeInfo>
        <ContainerWelcomeInfo>
          <h2>¿Qué es Art Dental?</h2>
          <br />
          <br />
          <p>
            Art Dental es un consultorio de especialidades dentales creado por
            cirujanos dentistas egresados de la Universidad Nacional Autónoma de
            México; tenemos la misión de diagnosticar, prevenir y realizar
            tratamientos bucales de manera integral.
          </p>
          <br />
          <p>
            Abrimos nuestras puertas para brindarte la atención odontológica que
            te mereces. Es tiempo de lucir la sonrisa que te mereces, por eso ofrecemos atención integral a niños, adultos y
            adolescentes.
          </p>
          <br />
          <h5>Conoce más de Art-Dental</h5>
        </ContainerWelcomeInfo>
      </MarginWelcome>
    </ContainerWelcome>
  );
};

export default Welcome;
