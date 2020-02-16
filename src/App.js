import React, {useState} from 'react';
import * as Style from "./App.styled";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import Homepage from "./components/Homepage/Homepage";
import {PageInfoContext} from "./core/context/pageInfo-contetx";


const App = () => {
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        cursor: null
    });

    return (
        <PageInfoContext.Provider value={{
            pageInfo,
            setContext: value => setPageInfo(value)
        }}>
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
        </PageInfoContext.Provider>
    );
};

export default App;
