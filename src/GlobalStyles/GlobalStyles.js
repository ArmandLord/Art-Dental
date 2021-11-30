import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-family: 'Montserrat Alternates', sans-serif;
        font-family: 'Playfair Display', serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Raleway', sans-serif;
    }

`

export const Container = styled.div`
    z-index: 1; 
    width: 100%;
    height: 100%;
    max-width: 1200px;
    min-width: 300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px; 
    padding-left: 50px;
    
       
    @media screen and (max-width: 960px){
        padding-right: 20px; 
        padding-left: 20px;
    }
`