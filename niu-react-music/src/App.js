import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import HYAppHeader from "./components/app-header";
import HYAppFppter from "./components/app-footer";

const App = memo(() => {
    return (
        <HashRouter>
            <div>
                <HYAppHeader></HYAppHeader>
                {renderRoutes(routes)}
                <HYAppFppter></HYAppFppter>
            </div>
        </HashRouter>
    );
});

export default App;
