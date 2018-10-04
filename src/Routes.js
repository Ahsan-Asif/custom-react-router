import React, { Component } from "react";
import { Redirect, Route,Switch } from "react-router-dom";
import User from './User';
import UserDetail from './UserDetail';


export default class Routes extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/userdetail" component={UserDetail} />
      </Switch>
    );
  }
}
