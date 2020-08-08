import React from 'react';
import AuthenticationBox from "./AuthenticationBox";

class Home extends React.Component {

    render() {
    	if(!localStorage.getItem('token')) {
        	this.props.history.push('/login')
  		}else{
  			this.props.history.push('/welcome')
  		}
  		return null;
    }

}

export default Home
