import React from 'react';
import * as S from "./Planet.styled";
import Header from "../../../shared/Header/Header";
import PropTypes from 'prop-types';


const Planet = props => {
    const {name, climates, population, gravity, navigateTo} = props.data;

    return (
        <S.Wrapper onClick={props.navigateTo}>
            <Header textHeader={name}/>
            <S.InfoContainer>
                <S.InfoElement>
                    <S.InfoHeader>
                        Climates:
                    </S.InfoHeader>
                    <S.InfoData>
                        {climates.map(climate => <React.Fragment key={climate}>{climate}</React.Fragment>)}
                    </S.InfoData>
                </S.InfoElement>
                <S.InfoElement>
                    <S.InfoHeader>
                        Population:
                    </S.InfoHeader>
                    <S.InfoData>
                        {population !== null ? population : 'unknown'}
                    </S.InfoData>
                </S.InfoElement>
                <S.InfoElement>
                    <S.InfoHeader>
                        Gravity:
                    </S.InfoHeader>
                    <S.InfoData>
                        {gravity}
                    </S.InfoData>
                </S.InfoElement>
            </S.InfoContainer>
        </S.Wrapper>
    );
};

Planet.propTypes = {
    data: PropTypes.object.isRequired,
    navigateTo: PropTypes.func.isRequired,
};

export default Planet;
