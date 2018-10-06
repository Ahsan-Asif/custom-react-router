import React, {Component} from "react";
import {Router, Route, Link } from 'react-router-dom';
import UserDetail from './UserDetail';


class User extends Component{
  render(){
      return(
        <div>
            <div>This is the user Component Render</div>
            <div><Link to="/userdetail">UserDetail</Link></div>
        </div>
    );
  }
}
export default User;
