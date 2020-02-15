import React from 'react';
import PlanetList from "./PlanetList/PlanetList";
import * as S from "../Homepage/Homepage.styled"
import Header from "../shared/Header/Header";


const Homepage = () => {
    return (
        <S.Wrapper>
            <Header/>
            <PlanetList/>
        </S.Wrapper>
    );
};

export default Homepage;
