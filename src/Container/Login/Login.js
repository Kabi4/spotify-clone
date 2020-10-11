import React, { Component } from 'react';
import Logo from './../../Components/Logo/Logo';
import './Login.css';

import {accessUrl} from './../Spotify/Spotify';

class Login extends Component {
    
    render() {
        return (
            <main className="login">
                <Logo classNaam="login__logo"/>
                <a href={accessUrl} className="login__button">Login With Spotify</a>
            </main>
        )
    }
};

export default Login;