import React from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Admin from './components/Admin';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render(props) {
        return (
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Login}/>
            </Switch>
        );
    }
}

export default App;
