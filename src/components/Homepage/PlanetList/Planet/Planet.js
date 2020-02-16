import React from 'react';
import * as S from "./Planet.styled";
import Header from "../../../shared/Header/Header";
import PropTypes from 'prop-types';
import InfoBox from "../../../shared/InfoBox/InfoBox";


const Planet = ({ data: { name, climates, population, gravity }, navigateTo }) => {

    return (
        <S.Wrapper onClick={navigateTo}>
            <Header textHeader={name}/>
            <S.InfoContainer>
                <InfoBox headerText={"Climates:"}
                         value={climates.map(climate => <React.Fragment
                             key={climate}>{`${climate} `}</React.Fragment>)}/>
                <InfoBox headerText={"Population:"} value={population}/>
                <InfoBox headerText={"Gravity:"} value={gravity}/>
            </S.InfoContainer>
        </S.Wrapper>
    );
};

Planet.propTypes = {
    data: PropTypes.object.isRequired,
    navigateTo: PropTypes.func.isRequired,
};

export default Planet;
