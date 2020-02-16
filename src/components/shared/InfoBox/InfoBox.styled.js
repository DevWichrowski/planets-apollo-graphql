import styled from "styled-components";
import {headerColor} from "../../../styles/colors";


export const InfoElement = styled.div`
display: flex;
flex-direction: column;
padding: 15px 0;
`;

export const InfoHeader = styled.div`
font-weight: bold;
margin-bottom: 5px;
font-size: 16px;
color: ${headerColor};
`;

export const InfoData = styled.div`
white-space: normal;
`;