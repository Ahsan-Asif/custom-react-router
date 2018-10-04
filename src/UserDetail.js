import React, {Component} from "react";
import {Router, Route } from 'react-router-dom';

class UserDetail extends Component{
  render(){
    console.log(this.props.match);
      return(
        <div>This is the UserDetailed Component Render</div>
      );
  }
}
export default UserDetail;
