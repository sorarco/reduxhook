import React from 'react';
import { Route, Switch } from "react-router-dom";
import routes from "../../routes/routes.config";
const DefaultLayout = (props) => {
    const { autenticado } = props;
    return (
        <div style={{ background: 'red', padding: 10 }}>
            <span>autenticado: {autenticado}</span>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => <route.component {...props} />}
                        />
                    ) : null;
                })}
            </Switch>
        </div>
    );
}

export default DefaultLayout;