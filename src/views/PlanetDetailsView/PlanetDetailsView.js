import React from 'react';
import Header from "../../components/shared/Header/Header";
import PlanetDetails from "../../components/Homepage/PlanetDetails/PlanetDetails";
import Footer from "../../components/shared/Footer/Footer";

const PlanetDetailsView = () => {
    return (
        <>
            <Header textHeader={'Planet details'} homeButton={true}/>
            <PlanetDetails/>
            <Footer/>
        </>
    );
};

export default PlanetDetailsView;