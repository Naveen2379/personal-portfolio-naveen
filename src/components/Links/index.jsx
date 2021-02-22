import React from 'react';
import { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

import Works from "../Works";
import Photography from "../Photography";
import Blogs from "../Blogs";

import './index.css';


const Links = () => {
    let { history } = useHistory();

    /*const handleClick = () => {
        history.push('/works');
    }*/
    console.log('Links component');
    return (
        <div className='links'>
            {/*<button onClick={handleClick}>Click</button>*/}
            <Link to='/'>Home</Link>
            <Link to='/works'>Works</Link>
            <Link to='/photography'>Photography</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    )
}

export default Links;