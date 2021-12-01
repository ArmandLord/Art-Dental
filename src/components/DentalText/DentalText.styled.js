import styled from 'styled-components';
export const bgOne = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1638244155/Art-Dental/bgOne_nqyjge.jpg' 
// const bgTwo = 'https://cdn.wallpapersafari.com/92/86/NoeJYT.jpg'

export const ContainerDetalText = styled.div`
    background: #000000;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    h1 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

        width: 100%;
        color: transparent;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20em;
        background-image: url(${bgOne});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 1600px) {
            font-size: 15em;
        }
        @media (max-width: 1000px) {
            font-size: 10em;
        }
        @media (max-width: 750px) {
            font-size: 6em;
        }
        @media (max-width: 400px) {
            font-size: 4em;
        }
    }
`;