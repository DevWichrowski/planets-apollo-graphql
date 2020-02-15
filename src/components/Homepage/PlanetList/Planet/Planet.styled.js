import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
width: 100%;
padding: 10px 0;
font-size: 16px;
min-height: 260px;
max-height: 300px;
background-color: rgba(255, 255, 255, 0.0);
border: 0.5px solid rgba(255, 255, 255, 0.5);
box-shadow: 4px 4px 13px 0px rgba(0,0,0,0.75);
cursor: pointer;
transition: all 0.5s;

  &:hover{
  transition: all 0.5s;
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  }
`;

export const InfoContainer = styled.div`
width: 100%;
height: 100%;
padding: 0 15px;
display: flex;
flex-direction: column;
justify-content: flex-start;
color: rgba(255, 255, 255, 0.6);
`;

export const InfoElement = styled.div`
display: flex;
flex-direction: column;
padding: 15px 0;
`;

export const InfoHeader = styled.div`
font-weight: bold;
margin-bottom: 5px;
color: rgba(255, 255, 255, 0.8);
`;

export const InfoData = styled.div`
word-break: break-all;
`;
