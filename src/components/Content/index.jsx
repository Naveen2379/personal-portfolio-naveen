import React from 'react';
import './index.css';
import Category from "../Category";


const Content = () => {
    console.log('content component');
    //const [] = useState();
    const categories = [{type: 'Works'}, {type: 'Blogs'}, {type: 'Photography'}];

    const category = categories.map( (category) => {
        return <Category key={category.type} categoryDetails={category} />
    });
    return (
        <div className='content'>
            {categories.map((category) => {
                return <Category key={category.type} categoryDetails={category}/>
            })}
        </div>
    )
}

export default Content;