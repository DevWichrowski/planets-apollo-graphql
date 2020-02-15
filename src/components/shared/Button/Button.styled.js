import styled from "styled-components";
import {darkGrayColor, whiteColor} from "../../../styles/colors";

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
`;
