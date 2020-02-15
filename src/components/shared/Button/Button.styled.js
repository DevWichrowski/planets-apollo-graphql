import styled from "styled-components";
import {darkGrayColor, whiteColor} from "../../../styles/colors";

export const Button = styled.button`
  background-color: ${props => props.next ? darkGrayColor : null};
  color: ${props => props.next ? whiteColor : 'black'};
  margin: 0 10px;
  border: 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-weight: normal;
  text-align: center;
  padding: 0 15px;
  height: 30px;
  transition: all 0.5s;
  cursor: pointer;
  min-width: 115px;
`;