import React, { Component } from "react";
import { Redirect, Route,Switch, BrowserRouter } from "react-router-dom";
import User from './User';
import UserDetail from './UserDetail';


export default class Routes extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/:name" component={UserDetail} />
        </Switch>
    </BrowserRouter>
    );
  }
}
