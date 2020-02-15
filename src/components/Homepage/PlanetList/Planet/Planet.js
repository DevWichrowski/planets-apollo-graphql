import React from 'react';
import * as S from "./Planet.styled";
import Header from "../../../shared/Header/Header";
import PropTypes from 'prop-types';


const Planet = props => {
    const {name, climates, population, gravity, navigateTo} = props.data;

    return (
        <S.Wrapper onClick={props.navigateTo}>
            <Header textHeader={name}/>
            <p>Climates: {climates.map(climate => climate)}</p>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
        </S.Wrapper>
    );
};

Planet.propTypes = {
    data: PropTypes.object.isRequired,
    navigateTo: PropTypes.func.isRequired,
};

export default Planet;
