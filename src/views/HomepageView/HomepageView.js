import React from 'react';
import Header from "../../components/shared/Header/Header";
import Homepage from "../../components/Homepage/Homepage";
import {useDocumentTitle} from "../../utils/helpers/hooks";


const HomepageView = () => {
    useDocumentTitle('Planets Swapi');

    return (
        <>
            <Header/>
            <Homepage/>
        </>
    );
};

export default HomepageView;
