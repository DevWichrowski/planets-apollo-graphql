import React from 'react';
import * as Style from "./Header.styles";
import {useHistory} from 'react-router-dom';

const Header = ({textHeader, homeButton}) => {
    const history = useHistory();

    const navigateToHome = () => {
        history.push("/")
    };

    return (
        <Style.Wrapper>
            {homeButton ? <button onClick={navigateToHome}>Go back</button> : null}
            <Style.Title>{textHeader ?? 'Planets Swapi'}</Style.Title>
        </Style.Wrapper>
    );
};

export default Header;