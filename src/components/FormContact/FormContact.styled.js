import styled from "styled-components";

export const ContainerForm = styled.form`
  /* background: red; */
  display: flex;
  flex-direction: column;

  input {
    width: 350px;
    height: 35px;
    border: none;
    outline: none;
    margin-bottom: 2px;
    padding: 5px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
  }

  textarea {
    width: 350px;
    height: 50px;
    border: none;
    outline: none;
    margin-bottom: 5px;
    padding: 5px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
  }

  button {
    width: 350px;
    height: 30px;
    border: none;
    outline: none;
    margin-bottom: 2px;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    border: 2px solid #fff;
    background: transparent;
    transition: all 0.5s ease-in-out;
    
    &:hover{
        color: #000;
        background: #fff;
    }
  }
`;
