import React from 'react';
import * as Style from "./Planet.style";
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
        <Style.Wrapper onClick={props.navigateTo}>
            <Header textHeader={name}/>
            {/*<h1>Name: {name}</h1>*/}
            <p>Climates: {climates.map(climate => climate)}</p>
            <p>Population: {population}</p>
            <p>Gravity: {gravity}</p>
        </Style.Wrapper>
    );
};

export default Planet;