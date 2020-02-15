import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
width: 100%;
padding: 15px;
font-size: 14px;
min-height: 260px;
max-height: 300px;
box-shadow: 4px 4px 13px 0px rgba(0,0,0,0.75);
cursor: pointer;
transition: all 0.5s;

  &:hover{
  transition: all 0.5s;
  background-color: rgba(0,0,0,0.06);
  }
`;