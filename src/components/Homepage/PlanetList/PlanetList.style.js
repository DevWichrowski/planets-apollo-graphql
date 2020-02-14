import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(5, minmax(18%, 20%));
grid-template-rows: repeat(2, minmax(260px, 300px)); 
grid-column-gap: 2%;
grid-row-gap: 15px;
margin: 0 auto;
padding: 30px;
width: 100%;
overflow: auto;
min-height: 90%;
`;
