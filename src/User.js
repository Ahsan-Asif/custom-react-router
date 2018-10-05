import React, {Component} from "react";
import {Link, Switch,} from 'react-router-dom';
import UserDetail from './UserDetail';
import axios from 'axios';


class User extends Component{
  constructor(props){
    super(props);
    this.state= {
      user: []
    };
  }

  componentDidMount(){
    axios.get("https://api.github.com/users")
    .then(response =>{
      console.log(response);
      if (response.status === 200){
        this.setState ({
          user: response.data
        });
      }
    })

    .catch(error =>{
      console.log(error);
    });
  }
  render(){
    const {user}= this.state;
    console.log("this is user console",this.props.match.url);
      return(
        <div>
            <div>This is the user Component Render</div>
            {this.state.user.map(({id,login,node_id}) =>(
            <div key={id}>
                <div><Link to={`${this.props.match.url}${id}`}> {id} </Link></div>
                <div><Link to={`${this.props.match.url}${login}`}> {login} </Link></div>
            </div>)
           )}
       </div>
     );
  }
}
export default User;
