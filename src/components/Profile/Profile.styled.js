import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";
import { bgOne } from "../DentalText/DentalText.styled";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GiTooth } from "react-icons/gi";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 50px 0;
  background: #ffffff;
  @media (max-width: 1100px) {
    height: auto;
  }
`;

export const ProfileMargin = styled(Container)`
  /* background: red; */
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: center;
    flex-direction: column;
  }

  .profile {
    height: 100%;
    width: 33.33%;
    background-image: url(${bgOne});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-radius: 2rem; */
    cursor: pointer;
    padding: 0;

    @media (max-width: 1100px) {
      width: 70%;
      height: 33.33%;
    }

    img {
      height: 88%;
      width: 88%;
      object-fit: cover;
      object-position: center;
      border-radius: 2rem;
      transition: all 0.5s ease-in-out;

      &:hover {
        height: 100%;
        width: 100%;
        border-radius: 0;
      }
    }
  }

  div {
    height: 100%;
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1100px) {
      width: 80%;
      height: 300px;
      justify-content: space-around;
    }

    p {
      /* background: red; */
      text-align: justify;
      width: 90%;
    }

    span {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #000000;
      padding: 1rem;
      border-bottom-right-radius: 2rem;
      @media (max-width: 1100px) {
        border-bottom-left-radius: 2rem;
      }
    }

    h2 {
      font-size: 2.5rem;
      width: 100%;
      color: #000000;
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
    h3 {
      font-size: 2rem;
      margin: 0;
      padding: 1rem;
      width: 100%;
      background: #000000;
      border-top-left-radius: 2rem;
      color: #000000;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      color: #ffffff;
      @media (max-width: 1100px) {
        border-top-right-radius: 2rem;
      }
    }
  }
`;

export const IconInstagram = styled(AiFillInstagram)`
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: rgb(31, 140, 198);
  }
`;

export const IconFacebook = styled(BsFacebook)`
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: rgb(31, 140, 198);
  }
`;

export const IconGmail = styled(SiGmail)`
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: rgb(31, 140, 198);
  }
`;

export const IconToohth = styled(GiTooth)`
  font-size: 5rem;
  color: #000000;
  cursor: pointer;

  @media (max-width: 1100px) {
    display: none;
  }
  &:hover {
    color: rgb(31, 140, 198);
  }
`;
