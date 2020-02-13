import React from 'react';
import * as Style from "./App.style";
import Homepage from "./components/Homepage/Homepage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetDetails from "./components/Homepage/PlanetDetails/PlanetDetails";


const App = () => {
    return (
        <Style.AppWrapper>
            <BrowserRouter>
                <Switch>
                    <Route path="/planet/:id">
                        <PlanetDetails/>
                    </Route>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Style.AppWrapper>
    );
};

export default App;
