import React from 'react';
import * as Style from "./App.style";
import Homepage from "./components/Homepage/Homepage";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <Style.AppWrapper>
            <BrowserRouter>
                <Route exact path="/:page" component={Homepage}/>
            </BrowserRouter>
        </Style.AppWrapper>
    );
};

export default App;
