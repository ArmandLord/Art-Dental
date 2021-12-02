import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { bgOne } from "../DentalText/DentalText.styled";

export const ServicesDentalWrapper = styled.div`
  background: #000000;
  width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    height: auto;
  }
`;

export const MarginServicesDental = styled(Container)`
  header {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    color: #ffffff;
    font-size: 1.5rem;

    h2 {
      font-size: 3rem;
      width: 100%;
      color: transparent;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      background-image: url(${bgOne});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .div {
      background: #000000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 3rem;
      padding: 2rem;
      width: 80%;
      height: 270px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);

      @media (max-width: 500px) {
        height: 400px;
        width: 90%;
      }

      p {
        text-align: justify;
        width: 45%;
        @media (max-width: 1100px) {
          width: 95%;
        }
      }
      img {
        width: 45%;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 1.5rem;
        @media (max-width: 1100px) {
          display: none;
        }
      }
    }

    @media (max-width: 1200px) {
      height: auto;
    }

    span {
      background-image: url(${bgOne});
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 2rem;
      width: 90%;
      height: 400px;
      margin-bottom: 50px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      flex-direction: column;
      color: #ffffff;

      @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 30px;
        height: 600px;
      }

      h3 {
        background: #000;
        width: 80%;
        margin-bottom: 30px;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 1.5rem;
        text-align: center;
        font-size: 1.5rem;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
`;

export const PriceServicesDental = styled(Link)`
  width: 220px;
  height: 50px;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.4s;

  b {
    color: #000000;
  }
  &:hover {
    transform: scale(1.1);
    color: greenyellow;
    b {
      color: greenyellow;
    }
  }
`;
