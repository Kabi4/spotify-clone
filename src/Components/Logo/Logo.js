import logo from './../../Assets/Logo/logo.jpg';

import React from 'react';

const Logo = (props) => {
    return (
        <img src={logo} alt="spotifyLogo.jpg" className={props.classNaam} />
    )
};

export default Logo;
