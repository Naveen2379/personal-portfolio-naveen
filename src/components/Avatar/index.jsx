import React from 'react';
import './index.css';
import AvatarImg from './avatar.png';

const Avatar = () => {
    return (
        <div className='avatar'>
            <img className='image' src={AvatarImg} alt='avatar' />
        </div>
    )
}

export default Avatar;