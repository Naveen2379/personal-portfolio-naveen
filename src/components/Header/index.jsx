import React from 'react';
import Logo from "../Logo";
import Links from "../Links";

import './index.css';


const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Links />
        </div>
    )
}

export default Header;