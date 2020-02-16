import React from 'react';
import * as Style from "./Header.styled";
import {useHistory} from 'react-router-dom';
import {Button} from "../Button/Button.styled";
import PropTypes from 'prop-types';


const Header = ({textHeader, homeButton}) => {
    const history = useHistory();

    const navigateToHome = () => {
        history.push("/")
    };

    return (
        <Style.Wrapper>
            <Style.ButtonContainer>
                {homeButton && <Button onClick={navigateToHome}>Go back</Button>}
            </Style.ButtonContainer>
            <Style.Title>{textHeader ?? 'Planets Swapi'}</Style.Title>
        </Style.Wrapper>
    );
};


Header.propTypes = {
    textHeader: PropTypes.string,
    homeButton: PropTypes.bool
};

export default Header;
