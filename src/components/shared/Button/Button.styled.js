import styled from "styled-components";


export const Button = styled.button`
  background-color: ${props => props.next ? 'black' : '#2a2b2b'};
  color: ${props => props.next ? 'rgba(255,255,255,0.8)' : 'rgba(224,160,16,0.75)'};
  margin: 0 10px;
  border: ${props => props.next ? 'none' : '1px solid black'};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-weight: normal;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  padding: 0 15px;
  height: 30px;
  transition: all 0.5s;
  cursor: pointer;
  min-width: 115px;
  
  
  &:hover {
    background-color: rgb(79,79,81);
    color: rgba(225,225,225,0.8);
    border: none;
    transition: 0.5s;
  }
  
   @media screen and (max-width: 1000px) {
   min-width: 80px;
   font-size: 10px;
   }
`;
