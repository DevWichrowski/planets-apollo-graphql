import styled from 'styled-components'
import {darkGrayColor, orangeColor} from "../../../styles/colors";


export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 5%;
width: 100%;
padding: 15px;
background-color: ${darkGrayColor};
`;

export const Placeholder = styled.button`
  color: transparent;
  background-color: transparent;
  margin: 0 10px;
  border: 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  text-align: center;
  padding: 0 15px;
  height: 30px;
  transition: all 0.5s;
  cursor: auto;
  outline: none;
  min-width: 115px;
`;

export const PageNumber = styled.p`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
margin: 0 10px;
height: 30px;
color: ${orangeColor};
width: 30px;
border-radius: 50%;
font-size: 16px;
`;
