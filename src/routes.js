import React from "react";
import { BrowserRouter as Router, Routes as MyRoutes, Route } from 'react-router-dom';

import Home from "./containers/Home";
import Users from "./containers/Users";

function Routes() {
    return (
        <Router>
            <MyRoutes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/usuarios" element={<Users />} />
            </MyRoutes>
        </Router>
    );
}

export default Routes;
