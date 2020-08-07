import React from 'react';
import './AuthenticationBox.css'
import HomeComponent from './HomeComponent'
import {Route} from 'react-router-dom';


class AuthenticationBox extends React.Component {
    render() {
        return (
            <div id="authBox">
                {this.props.children}
            </div>
        );
    }
}

export default AuthenticationBox;
