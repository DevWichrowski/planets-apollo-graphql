import React, {useEffect, useState} from 'react';
import * as Style from "./Header.styled";
import {useHistory} from 'react-router-dom';
import {Button} from "../Button/Button.styled";
import PropTypes from 'prop-types';


const Header = ({textHeader, homeButton}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const history = useHistory();

    const navigateToHome = () => {
        history.push("/")
    };

    const updateWindowWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
    }, [window]);

    return (
        <Style.Wrapper>
            <Style.ButtonContainer>
                {homeButton && width >= 600 && <Button onClick={navigateToHome}>Go back</Button>}
                {homeButton && width < 600 && <Style.BackIcon onClick={navigateToHome}> &lt; </Style.BackIcon>}
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
