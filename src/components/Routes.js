import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Joke from "./joke";
import Doggos from "./doggos";
import ChuckNorris from "./ChuckNorris";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Joke />
          </Route>

          <Route exact path="/doggos">
            <Doggos />
          </Route>

          <Route exact path="/chucknorris">
            <ChuckNorris />
          </Route>

          <Route>

          </Route>
        </Switch>
      </Router>
    );
  }
}
