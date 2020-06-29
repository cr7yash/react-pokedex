import React from "react";
import { Route, Switch } from "react-router";

import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Pokedex {...props} />} />
      <Route
        exact
        path="/pokemon:id"
        render={props => <Pokemon {...props} />}
      />
    </Switch>
  );
}
