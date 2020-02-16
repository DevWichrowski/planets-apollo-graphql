import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  align-items: center;
    `;

export const InfoElement = styled.div`
display: flex;
flex-direction: column;
padding: 15px 0;
`;

export const Container = styled.div`
  width: 60%;
  padding: 10px 0;
   box-shadow: 4px 4px 13px 0px rgba(0,0,0,0.75);
   min-height: 300px;
   border-radius: 5px;
   background-color: transparent;
   border: 0.5px solid rgba(255, 255, 255, 0.5);
   margin-bottom: 50px;
   color: rgba(255, 255, 255, 0.6);
   @media screen and (max-width: 1000px) {
   width: 80%
   }
`;

export const InfoContainer = styled.div`
width: 100%;
height: 100%;
padding: 0 15px;
display: grid;
grid-template-columns: repeat(4, minmax(23%, 25%));
grid-template-rows: repeat(2, minmax(40px, 100px)); 
grid-column-gap: 2%;
justify-content: flex-start;
color: rgba(255, 255, 255, 0.6);

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

export const MovieContainer = styled.div`
padding: 0 15px;
`;

export const MovieHeader = styled.div`
font-weight: bold;
margin-bottom: 5px;
font-size: 16px;
text-align: center;
color: rgba(255, 255, 255, 0.8);
`;

export const MovieOpening = styled.div`
color: rgba(224,160,16,0.75);
font-size: 14px;
line-height: 3;
margin-bottom: 20px;
padding: 0 30px;

@media screen and (max-width: 800px) {
padding: 0 5px;
text-align: center;
}
`;

export const MovieDirector = styled.div`
    text-align: center;
    font-size: 14px;
    margin: 10px 0;
`;

export const CharactersContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 10px 30px;
line-height: 2;

@media screen and (max-width: 800px) {
padding: 10px 5px;
text-align: center;
}
`;

export const MovieCharacter = styled.div`
margin-right: 10px;
margin-bottom: 5px;
`;

export const Divider = styled.hr`
 border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(224,160,16,0), rgba(224,160,16,0.75), rgba(224,160,16,0));
`;

export const NoMovies = styled.h1`{
text-align: center;
width: 100%;
}`
