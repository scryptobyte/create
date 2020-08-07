import React from 'react';
import AuthenticationBox from "./AuthenticationBox";

class SignUp extends React.Component {
    render() {
        return (
            <AuthenticationBox>
                <a href="/login">login</a>
            </AuthenticationBox>
        )
    }

}

export default SignUp
