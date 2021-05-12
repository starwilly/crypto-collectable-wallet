import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CollectableListPage from "../pages/CollectableListPage";
import CollectableDetailPage from "../pages/CollectableDetailPage";

export default function AppRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/details/:contractAddress/:tokenId"
        component={CollectableDetailPage}
      />
      <Route path="/list" component={CollectableListPage} />
      <Route path="*">
        <Redirect to="/list" />
      </Route>
    </Switch>
  );
}
