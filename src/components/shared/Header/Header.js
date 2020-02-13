import React from 'react';
import * as Style from "./Header.styles";

const Header = ({textHeader}) => {
    return (
        <Style.Wrapper>
            <Style.Title>{textHeader ?? 'Planets Swapi'}</Style.Title>
        </Style.Wrapper>
    );
};

export default Header;