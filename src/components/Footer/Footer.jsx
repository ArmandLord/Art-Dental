import { ContainerFooter, FooterMin } from "./Footer.styled";
import { FormContact } from "../index";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <FooterMin>
          <h2>Contactanos</h2>
          <FormContact />
          <small>Copyright © 2021 Art-Dental. Diseño by Armandev</small>
        </FooterMin>
      </ContainerFooter>
    </>
  );
};

export default Footer;
