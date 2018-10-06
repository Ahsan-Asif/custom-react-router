import React, { Component } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import User from './User';
import UserDetail from './UserDetail';
import {BrowserRouter} from "react-router-dom";


export default class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));
