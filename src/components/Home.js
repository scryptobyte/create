import React from 'react';
import AuthenticationBox from "./AuthenticationBox";

class Home extends React.Component {
    render() {
        return (
            <AuthenticationBox>
                <a href="/signup">signup</a>
            </AuthenticationBox>
        )
    }

}

export default Home
