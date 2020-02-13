import React from 'react';
import * as Style from "./Layout.styles";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <Style.Wrapper>
            <Header/>
            <Style.Content>
                {children}
            </Style.Content>

        </Style.Wrapper>
    );
};

export default Layout;