import React from 'react';
import './AuthenticationBox.css'
import HomeComponent from './HomeComponent'
import {Route} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class AuthenticationBox extends React.Component {
    render() {
        return (
            <Container className="p-5">
                {this.props.children}
            </Container>
        );
    }
}

export default AuthenticationBox;
