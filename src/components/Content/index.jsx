import React from 'react';
import './index.css';
import Category from "../Category";
import Works from "../Works";
import Photography from "../Photography";
import Blogs from "../Blogs";


const Content = () => {
    //const [] = useState();
    const categories = [{type: 'Works'}, {type: 'Blogs'}, {type: 'Photography'}];

    const category = categories.map( (category) => {
        return <Category key={category.type} categoryDetails={category} />
    });
    return (
        <div className='content'>
            <div className='category'>
                <Works />
            </div>
            <div className='category'>
                <Photography />
            </div>
            <div className='category'>
                <Blogs />
            </div>

            {/*{categories.map((category) => {
                return <Category key={category.type} categoryDetails={category}/>
            })}*/}
        </div>
    )
}

export default Content;