import styled from "styled-components";
import {
    buttonBackgroundHover,
    darkGrayColor,
    headerColor,
    orangeColor,
    whiteOpacityColor
} from "../../../styles/colors";


export const Button = styled.button`
  background-color: ${props => props.next ? 'black' : darkGrayColor};
  color: ${props => props.next ? headerColor : orangeColor};
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
    background-color: ${buttonBackgroundHover};
    color: ${whiteOpacityColor};
    border: none;
    transition: 0.5s;
  }
  
   @media screen and (max-width: 1000px) {
   min-width: 80px;
   font-size: 10px;
   }
`;
