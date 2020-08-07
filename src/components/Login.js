import React from 'react';
import AuthenticationBox from "./AuthenticationBox";

class Login extends React.Component {
    render() {
        return (
            <AuthenticationBox>
                <a href="/signup">signup</a>
            </AuthenticationBox>
        )
    }

}

export default Login
