import React from 'react';
import * as Style from "./Header.styles";
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
            {homeButton && <Button onClick={navigateToHome}>Go back</Button>}
            <Style.Title>{textHeader ?? 'Planets Swapi'}</Style.Title>
        </Style.Wrapper>
    );
};

Header.propTypes = {
    textHeader: PropTypes.string.isRequired,
    homeButton: PropTypes.bool
};

export default Header;
