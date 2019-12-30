import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import BasicTransition from "./components/BasicTransition";
import BasicTransition2 from "./components/BasicTransition2";

export default function Router() {
  return (
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route path="/basic-transition" exact>
            <BasicTransition />
          </Route>
          <Route path="/basic-transition2" exact>
            <BasicTransition2 />
          </Route>
          <Redirect to="/basic-transition" />
        </Switch>
      </MainLayout>
    </HashRouter>
  );
}
