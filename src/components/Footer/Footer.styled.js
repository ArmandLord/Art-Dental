import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'



export const ContainerFooter = styled.footer`
    display: flex; 
    align-items: center;
    justify-content: center;
    background: #000000;
    
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 350px;
    z-index: -99;
`

export const FooterMin = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 2rem 0 1rem;
    /* background: red; */
    h2{
        color: #ffffff; 
        font-size: 1.7rem;
        margin: 0;
        @media screen and (max-width: 770px){
            font-size: 1.3rem;
        }
    }
    small{
        color: #e0e0e0;
        @media screen and (max-width: 770px){
            font-size: .3rem;
        }
    }

    ${Container}
`
