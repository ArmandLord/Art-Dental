import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { bgOne } from "../DentalText/DentalText.styled";

export const ContainerWelcome = styled.div`
  width: 100%;
  height: calc(50vh - 60px);
  background-color: #ffffff;

  @media (max-width: 960px) {
    height: 700px;
  }
`;

export const MarginWelcome = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  h2 {
    margin-top: 2rem;
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

  p {
    font-size: 1.3rem;
    text-align: justify;
    color: #828282;

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
  }

  span {
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
    border-radius: 0.6rem;
    @media (max-width: 600px) {
        height: 110px;
      }

    img {
      filter: grayscale(100%);
      width: 55px;
      height: 55px;
      object-fit: cover;

      @media (max-width: 600px) {
        width: 40px;
        height: 40px;
      }

      &:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

export const ContainerWelcomeInfoLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
  }

  img {
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    height: 70%;
    border-radius: 10px;
    margin-bottom: 15px;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;

export const ContainerWelcomeInfoRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
  color: #ffffff;

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
  }

  img {
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    height: 70%;
    border-radius: 10px;
    margin-bottom: 15px;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;
