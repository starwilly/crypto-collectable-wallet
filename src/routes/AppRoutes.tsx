import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CollectableListPage from "../pages/CollectableListPage";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/list" component={CollectableListPage} />
      <Route path="*">
        <Redirect to="/list" />
      </Route>
    </Switch>
  );
}
