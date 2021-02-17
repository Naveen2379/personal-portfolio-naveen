import React from 'react';
import Header from "../Header";
import Introduction from "../Introduction";
import Content from "../Content";

import './index.css';


const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <Introduction />
            <Content />
        </div>
    )
}

export default HomePage;