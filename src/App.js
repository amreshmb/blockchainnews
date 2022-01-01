import React, { useEffect } from "react";
import "./App.css";
import Routes from "./common/Routes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const rt = urlParams.get("rt");
    if (rt) {
      sessionStorage.setItem("refreshToken", rt);
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {Object.keys(Routes).map((route) => {
            let component = Routes[route].component;
            return (
              <Route
                path={Routes[route].path}
                exact={true}
                key={Routes[route].path}
                component={component}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
