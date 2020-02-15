import React from 'react';
import * as Style from "./App.styled";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetDetails from "./components/Homepage/PlanetDetails/PlanetDetails";
import Homepage from "./components/Homepage/Homepage";


const App = () => {
    return (
        <Style.AppWrapper>
            <Style.Twinkling>
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
            </Style.Twinkling>
        </Style.AppWrapper>
    );
};

export default App;
