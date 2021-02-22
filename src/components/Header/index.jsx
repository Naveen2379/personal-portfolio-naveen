import React from 'react';
import Logo from "../Logo";
import Links from "../Links";

import './index.css';


const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo-links'>
                <Logo />
                <Links />
            </div>
            <div className='introduction-content'>
                {props.children}
            </div>
        </div>
    )
}

export default Header;