import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component{
  constructor(){
    super();
    this.state = {
      user: {}
    };
  }
  componentWillReceiveProps(props){
    const { match } = props;
    const { user } = this.state;
    if(match.params.id !== this.props.match.params.id){
      console.log(`load user for ${match.params.id}`);
    }

    if(user.id && user.id !== match.params.id*1){
      axios.get(`/api/users/${match.params.id}`)
        .then( result => this.setState({ user: result.data }));
    }
  }
  componentDidMount(){
    const { match } = this.props;
    axios.get(`/api/users/${match.params.id}`)
      .then( result => this.setState({ user: result.data }));
  }
  render(){
    const { user } = this.state;

    if(!user.id){
      return null;
    }
    return (
      <div className='well'>{ user.name }</div>
    );
  }
}
