import {
  MarginServicesDental,
  ServicesDentalWrapper,
} from "./ServicesDental.styled";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import { dataResina } from "../../data";

const ServicesDental = () => {
  return (
    <ServicesDentalWrapper>
      <MarginServicesDental>
        <header>
          <h2>Conoce nuestros servicios</h2>
        </header>
        <section>
          <span>
            <h3>Resinas alta estética</h3>
            <div className="div">
              <p>
                Las resinas de alta estética son una solución para corregir:
                pequeñas imperfecciones, fracturas menores, caries, alteraciones
                de color, formas inadecuadas, dientes pequeños, etc.
              </p>
              <img
                src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638406055/Art-Dental/Resina/resina1_d8f4h3.jpg"
                alt="resinas dentales"
              />
            </div>
          </span>
          <span>
            <h3>Amalgamas</h3>
            <div className="div">
              <img
                src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638412156/Art-Dental/Resina/amlagama_uvwi37.jpg"
                alt="amalgamas dentales"
              />
              <p>
                Es un modo de reparar un diente dañado por caries y devolverle
                su función y forma normal. Cuando el odontólogo realiza una
                obturación o restauración, primero retira el material cariado,
                limpia la zona afectada, luego rellena la cavidad con un
                material de restauración. Al cerrar espacios donde las bacterias
                pueden alojarse, la restauración ayuda a evitar futuras caries.
              </p>
            </div>
          </span>
          <span>
            <h3>Limpieza por ultrasonido</h3>
            <div className="div">
              <p>
                La limpieza dental es un procedimiento donde con aparatos de
                ultrasonido que contienen una punta que no cortan además de
                irrigación con agua nos ayudan con la vibración a desprender
                pigmentos que manchan la superficie de los dientes, restos de
                alimento, placa dentobacteriana (BIOFILM DENTAL) y sarro
                (CALCULO O TARTARO DENTAL). Esta punta se pasa por todos los
                dientes y contorno de la encía.
              </p>
              <img
                src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638412703/Art-Dental/Resina/ultrasonido_geend2.jpg"
                alt="resinas dentales"
              />
            </div>
          </span>
          <span>
            <h3>Blanqueamiento</h3>
            <div className="div">
              <img
                src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638412488/Art-Dental/Resina/blanqueamiento_sjqeqp.jpg"
                alt="blanqueamiento dentale"
              />
              <p>
                El blanqueamiento dental es un tratamiento de odontología
                estética que tiene por objetivo eliminar las manchas dentales y
                hacer que la dentición adquiera una tonalidad más blanca y
                brillante. La actual popularidad de la estética ha convertido a
                este procedimiento odontológico en uno de los más solicitados de
                los últimos años.
              </p>
            </div>
          </span>
          <span>
            <h3 style={{ marginBottom: "0" }}>¡Aprovecha!</h3>
            <CarouselComponent data={dataResina} />
            <button>Conoce nuestros precios</button>
          </span>
        </section>
      </MarginServicesDental>
    </ServicesDentalWrapper>
  );
};

export default ServicesDental;
