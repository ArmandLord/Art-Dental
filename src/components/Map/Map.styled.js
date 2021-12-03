import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { FaMapMarkedAlt } from "react-icons/fa";

export const bgOne =
  "https://res.cloudinary.com/dy9tey0yi/image/upload/v1638244155/Art-Dental/bgOne_nqyjge.jpg";

export const ContainerMap = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bgOne});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 350px;
`;

export const MarginMap = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      color: #ffffff;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      background: #000000;
      width: 80%;
      height: 100px;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }

    p {
        text-align: center;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      margin-top: 1.2rem;
      color: #ffffff;
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 100px;
    }
  }
`;

export const IconMarker = styled(FaMapMarkedAlt)`
  font-size: 1.2rem;
  color: #ffffff;
`;
