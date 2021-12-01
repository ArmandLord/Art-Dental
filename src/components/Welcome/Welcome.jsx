import {
  ContainerWelcome,
  MarginWelcome
} from "./Welcome.styled";

const Welcome = () => {
  return (
    <ContainerWelcome>
      <MarginWelcome>
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>
          Art Dental es un consultorio de especialidades dentales creado por
          cirujanos dentistas egresados de la Universidad Nacional Autónoma de
          México; tenemos la misión de diagnosticar, prevenir y realizar
          tratamientos bucales de manera integral. Contamos con especialistas
          certificados en todas las áreas de la odontología con el objetivo de
          brindarte el mejor servicio en un solo lugar. Efectuamos diagnósticos
          y tratamientos interdisciplinarios.
        </p>

        <span>
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638388869/Art-Dental/LOGO-UNAM_vdf6a1.png"
            alt="logo Art-Dental"
          />
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638388205/Art-Dental/logo_zzke70.png"
            alt="logo Art-Dental"
          />
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638388874/Art-Dental/odonto-logo_q6x7fs.png"
            alt="logo Art-Dental"
          />
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638389749/Art-Dental/Logo_Hidalgo_fabuj4.png"
            alt="logo Art-Dental"
          />
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638390008/Art-Dental/Odontologia-Simbolo_igodjy.png"
            alt="logo Art-Dental"
          />
        </span>
      </MarginWelcome>
    </ContainerWelcome>
  );
};

export default Welcome;
