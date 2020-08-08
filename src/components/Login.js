import React from 'react';
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.formColor = {backgroundColor: '#EEF3F7'};
        this.btnColor = {backgroundColor: '#3B7FAD'}
    }
    handleSubmit(event) {
        event.preventDefault();
        let form = event.target;

        const loginObject = {};
        loginObject["email"] = form.elements.email.value;
        loginObject["password"] = form.elements.password.value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginObject)
        };
        // history.push("/")

        fetch('http://mlp-vm1.ukwest.cloudapp.azure.com:3002/api/v1/login', requestOptions).then(r=>r.json()).then(data => this.setState({ data }));

    }



    render() {
        return (
            <div id={"body"}>
                <div id={"left"}>
                    <div id={"authBox"}>
                        <div id={"formHeader"}>
                        </div>
                        <div id={"form"}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className={"form-label"}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name={"email"} className={"form-color"}
                                                  style={this.formColor}/>
                                    <Form.Text className="text-muted"> </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className={"form-lable left-align"}>Password</Form.Label>
                                    <a href={"/signup"} id={"passwordForgot"} className={"right-align"}> Forgot
                                        Password</a>
                                    <Form.Control type="password" placeholder="Password" style={this.formColor} name={"password"}/>
                                </Form.Group>

                                <Button variant="primary" type="submit" className={"btn-style"} style={this.btnColor}>
                                    <span className={"btn-label"}>SIGN IN</span></Button>
                            </Form>
                        </div>
                        <div id={"details"}>

                        </div>
                    </div>
                </div>
                <div id={"right"}></div>
            </div>
        )
    }

}

export default withRouter(Login)
