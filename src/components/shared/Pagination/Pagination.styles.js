import styled from 'styled-components'
import {darkGrayColor, whiteColor} from "../../../styles/colors";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
  background-color: ${props => props.next ? darkGrayColor : null};
  color: ${props => props.next ? whiteColor : 'black'};
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
`;

export const PageNumber = styled.p`
font-weight: bold;
margin: 0 10px;
`;
