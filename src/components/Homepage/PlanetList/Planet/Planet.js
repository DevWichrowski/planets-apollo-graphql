import React from 'react';
import * as Style from "./Planet.style";

// const style = {
//     border: '1px solid black',
//     borderRadius: '10px',
//     margin: '20px',
//     padding: '10px'
// };

const Planet = props => {
    const {name, climates, population, gravity, navigateTo} = props.data;

    return (
        <Style.Wrapper onClick={props.navigateTo}>
            <h1>Name: {name}</h1>
            <h2>Climates: {climates.map(climate => climate)}</h2>
            <h2>Population: {population}</h2>
            <p>Gravity: {gravity}</p>
        </Style.Wrapper>
    );
};

export default Planet;