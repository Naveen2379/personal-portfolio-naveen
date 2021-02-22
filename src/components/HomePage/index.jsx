import React from 'react';
import { Switch } from 'react-router-dom';

import Header from "../Header";
import Introduction from "../Introduction";
import Content from "../Content";

import './index.css';
import {Link, Route} from "react-router-dom";
import Links from "../Links";
import Works from "../Works";
import Photography from "../Photography";
import Blogs from "../Blogs";


const HomePage = () => {
    console.log('HomePage');
    return (
        <div className='homepage'>
        <Header>
            <Switch>
                <Route exact path='/'>
                    <Introduction />
                    <Content />
                </Route>
                <Route path='/works' component={Works} />
                <Route path='/photography' component={Photography} />
                <Route path='/blogs' component={Blogs} />
            </Switch>
        </Header>
        </div>
    )
}

export default HomePage;