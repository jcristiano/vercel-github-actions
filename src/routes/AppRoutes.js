import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

const AppRoutes = () => {
    return(
        <HashRouter basename="/">
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Sobre} path="/sobre" />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;