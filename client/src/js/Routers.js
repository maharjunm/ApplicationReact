/* eslint react/display-name:0 react/jsx-wrap-multilines:0*/
import App from "./App.jsx";
import First from "./../../src/js/first/First.jsx";
import Second from "./../../src/js/first/Second.jsx";
import React from "react";
import { Route } from "react-router";

export function renderRoutes() {

    return (
        <Route component={App}>
            <Route path="/" component={First}/>
            <Route path="/main" component={Second} />
        </Route>
    );

}

function isLoggedIn(nextState, replaceState) {
    let userSession = UserSession.instance();
    if(!userSession.isActiveContinuously()) {
        replaceState("/");
    }

}

