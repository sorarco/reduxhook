import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import history from "./history";
import IndexPage from "../pages/index/IndexPage";
import InfoPage from "../pages/info/InfoPage";

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Carregando...</div>
);


const DefaultLayout = React.lazy(() =>
    import("../pages/layout/defaultLayout")
);

const Routes = () => (
    <ConnectedRouter history={history}>
        <React.Suspense fallback={loading()}>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/info" component={InfoPage} />
                <Route
                    path="/detail"
                    render={props => (
                        <DefaultLayout
                            {...props}
                            autenticado={'yes'}
                        />
                    )}
                />
            </Switch>
        </React.Suspense>
    </ConnectedRouter>
);

export default Routes;