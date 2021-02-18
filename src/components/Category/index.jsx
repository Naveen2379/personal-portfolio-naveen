import React from 'react';
import './index.css';

const Category = ({categoryDetails}) => {
    const { type } = categoryDetails;
    console.log(type);
    return (
        <div className='category'>
            <p>{type}</p>
        </div>
    )
}

export default Category;