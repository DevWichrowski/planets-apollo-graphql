import styled from "styled-components";


export const Wrapper = styled.div`
position: relative;
height: calc(100% - 40px);
`;

export const ListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(5, minmax(18%, 20%));
grid-template-rows: repeat(2, minmax(260px, 300px)); 
grid-column-gap: 2%;
grid-row-gap: 15px;
margin: 0 auto;
padding: 30px;
width: 100%;
overflow: auto;
height: 95%;

@media screen and (max-width: 1000px) {
grid-template-columns: repeat(4, minmax(23%, 25%));
}

@media screen and (max-width: 800px) {
grid-template-columns: repeat(3, minmax(30%, 33%));
}

@media screen and (max-width: 650px) {
grid-template-columns: repeat(2, minmax(48%, 50%));
}

@media screen and (max-width: 400px) {
grid-template-columns: repeat(1, minmax(98%, 100%));
}
`;
