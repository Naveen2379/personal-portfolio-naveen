import React from 'react';
import Avatar from "../Avatar";
import AboutMe from "../AboutMe";

import './index.css';


const Introduction = () => {
    return (
        <div className='introduction'>
            <Avatar />
            <AboutMe />
        </div>
    )
}

export default Introduction;