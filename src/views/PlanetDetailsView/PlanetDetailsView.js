import React from 'react';
import Header from "../../components/shared/Header/Header";
import PlanetDetails from "../../components/Homepage/PlanetDetails/PlanetDetails";


const PlanetDetailsView = () => {
    return (
        <>
            <Header textHeader={'Planet details'} homeButton={true}/>
            <PlanetDetails/>
        </>
    );
};

export default PlanetDetailsView;
