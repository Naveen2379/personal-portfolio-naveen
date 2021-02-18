import React from 'react';
import AvatarImg from './avatar.png';

import './index.css';


const Avatar = () => {
    return (
        <div className='avatar'>
            <img className='image' src={AvatarImg} alt='avatar' />
            <h2 className='title'><span>Hi! <br/> I'm Naveen Kairamkonda</span></h2>
        </div>
    )
}

export default Avatar;