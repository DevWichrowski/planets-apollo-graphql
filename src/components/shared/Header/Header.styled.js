import styled from 'styled-components'
import {darkGrayColor, orangeColor} from "../../../styles/colors";


export const Wrapper = styled.div`
display: grid;
grid-template-columns: 5% 90% 5%;
padding: 5px 0;
background-color: ${darkGrayColor};
position: relative;
height: 40px;
`;

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
`;

export const Title = styled.h3`
color: ${orangeColor};
font-size: 2vh;
font-weight: normal;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
`;
