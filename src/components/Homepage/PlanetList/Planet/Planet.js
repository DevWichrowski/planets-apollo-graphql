import React from 'react';
import * as S from "./Planet.styled";
import Header from "../../../shared/Header/Header";

// const style = {
//     border: '1px solid black',
//     borderRadius: '10px',
//     margin: '20px',
//     padding: '10px'
// };

const Planet = props => {
    const {name, climates, population, gravity, navigateTo} = props.data;

    return (
        <S.Wrapper onClick={props.navigateTo}>
            <Header textHeader={name}/>
            {/*<h1>Name: {name}</h1>*/}
            <p>Climates: {climates.map(climate => climate)}</p>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
        </S.Wrapper>
    );
};

export default Planet;