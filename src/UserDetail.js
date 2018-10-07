import React, {Component} from "react";
import {Router, Route } from 'react-router-dom';
import axios from 'axios';

class UserDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      userdetail:{}
    };
  }

  componentDidMount(){
    console.log("props",this.props.match.url);
    axios.get(`https://api.github.com/users${this.props.match.url}`)
    .then(res =>{
      console.log(res.data);
      if (res.status === 200){
        this.setState({
          userdetail:res.data
        });
      }
    })
    .catch(error =>{
      console.log(error)
    });
  }

  render(){
  const {userdetail} = this.state;
    console.log(userdetail.id);
      return(
        <div>
          <div>This is the UserDetailed Component Render</div>
          <div>ID: {userdetail.id}</div>
          <div>Login: {userdetail.login}</div>
          <div>Node_iD: {userdetail.node_id}</div>
          <div>Name: {userdetail.name}</div>


        </div>
      );
  }
}
export default UserDetail;
