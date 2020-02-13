import React from 'react';
import PlanetList from "./PlanetList/PlanetList";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";


const Homepage = () => {
    return (
        <div>
            <Header/>
            <PlanetList/>
            <Footer/>
        </div>
    );
};

export default Homepage;