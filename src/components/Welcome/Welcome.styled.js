import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const ContainerWelcome = styled.div`
    width: 100%;
    height: calc(50vh - 60px);
 
`;

export const MarginWelcome = styled(Container)`
    
    display: flex;
    
`;

export const ContainerWelcomeInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 1.6rem;
    }

    p{
        font-size: 1.2rem;
        text-align: justify;
    }

    img {
        object-fit: cover;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        height: 70%;
        border-radius: 10px;
        margin-bottom: 15px;

        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
`;
