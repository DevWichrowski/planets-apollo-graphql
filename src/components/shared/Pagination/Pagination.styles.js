import styled from 'styled-components'
import {darkGrayColor, whiteColor} from "../../../styles/colors";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10%;
width: 100%;
padding: 15px;
background-color: #80858e;
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
font-weight: bold;
margin: 0 10px;
`;
