import {
  ProfileContainer,
  ProfileMargin,
  IconInstagram,
  IconFacebook,
  IconGmail,
  IconToohth,
} from "./Profile.styled";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileMargin>
        <div>
          <h3>¡Hola!</h3>
          <p>
            Soy egresado de la UNAM y he estudiado rehabilitación bucal,
            prótesis y oclusión en varias universidades nacionales y
            extranjeras. Fundador de Art-Dental, lugar donde laboro en practica
            privada en la áreas de rehabilitación bucal, prótesis, estética
            dental y disfunción de ATM.
          </p>
          <IconToohth style={{ color: "#fff" }} />
        </div>
        <div className="profile">
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1638244437/Art-Dental/FB_IMG_1638244051914_t1xili.jpg"
            alt="Dr. Gerardo Fuentes Pérez"
          />
        </div>
        <div>
          <h2>Dr. Gerardo Fuentes Pérez</h2>
          <IconToohth />
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100009650584005"
            >
              <IconFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/esedoc_gerardo/?fbclid=IwAR2zUhKqrNkyKBNwBDnKoV_RwidiDQ7Wbt-IapAXRZynNhbInft42D2nrt8"
            >
              <IconInstagram />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:gerardofuentes0000@gmail.com"
            >
              <IconGmail />
            </a>
          </span>
        </div>
      </ProfileMargin>
    </ProfileContainer>
  );
};

export default Profile;
