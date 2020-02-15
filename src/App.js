import React from 'react';
import * as Style from "./App.styled";
import Homepage from "./components/Homepage/Homepage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetDetails from "./components/Homepage/PlanetDetails/PlanetDetails";
import HomepageView from "./views/HomepageView/HomepageView";
import PlanetDetailsView from "./views/PlanetDetailsView/PlanetDetailsView";


const App = () => {
    return (
        <Style.AppWrapper>
            <BrowserRouter>
                <Switch>
                    <Route path="/planet/:id">
                        <PlanetDetailsView/>
                    </Route>
                    <Route exact path="/">
                        <HomepageView/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Style.AppWrapper>
    );
};

export default App;
