import styled from 'styled-components'


export const Wrapper = styled.div`
display: grid;
grid-template-columns: 5% 90% 5%;
padding: 5px 0;
background-color:#2a2b2b;
position: relative;
height: 40px;
`;

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
`;

export const BackIcon = styled.div`
color: white;
margin: 0 20px;
font-weight: bold;
text-align: center;
`;

export const Title = styled.h3`
color:rgba(224, 160, 16, 0.75);
font-size: 2vh;
font-weight: normal;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
`;
