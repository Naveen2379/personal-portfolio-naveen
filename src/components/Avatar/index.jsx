import React from 'react';
import AvatarImg from './avatar.png';

import './index.css';


const Avatar = () => {
    return (
        <div className='avatar'>
            <img className='image' src={AvatarImg} alt='avatar'>
                
            </img>
        </div>
    )
}

export default Avatar;