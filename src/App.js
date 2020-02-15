import React from 'react';
import * as Style from "./App.styled";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomepageView from "./views/HomepageView/HomepageView";
import PlanetDetailsView from "./views/PlanetDetailsView/PlanetDetailsView";


const App = () => {
    return (
        <Style.AppWrapper>
            <Style.Twinkling>
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
            </Style.Twinkling>
        </Style.AppWrapper>
    );
};

export default App;
