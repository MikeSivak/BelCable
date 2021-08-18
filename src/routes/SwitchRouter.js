import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function SwitchRouter({ routes }) {
    return (
        <Router>
            <Switch>
                {routes.map(({ path, component }, key) =>
                    <Route exact path={path} key={key} render={component} />
                )}
            </Switch>
        </Router>
    )
}