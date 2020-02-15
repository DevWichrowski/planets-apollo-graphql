import styled from 'styled-components'


export const Wrapper = styled.div`
display: grid;
grid-template-columns: 20% 60% 20%;
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
font-size: 24px;
font-weight: normal;
text-align: center;
margin: 0;
`;
