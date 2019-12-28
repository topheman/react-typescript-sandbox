import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import BasicTransition from "./components/BasicTransition";

export default function Router() {
  return (
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <BasicTransition />
          </Route>
        </Switch>
      </MainLayout>
    </HashRouter>
  );
}
