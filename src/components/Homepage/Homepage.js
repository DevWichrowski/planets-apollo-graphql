import React from 'react';
import PlanetList from "./PlanetList/PlanetList";
import * as S from "../Homepage/Homepage.styled"


const Homepage = () => {
    return (
        <S.Wrapper>
            <PlanetList/>
        </S.Wrapper>
    );
};

export default Homepage;
