import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../home";

const history = createBrowserHistory();

function Routes() {
    return (
        <Router history={history} >
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;