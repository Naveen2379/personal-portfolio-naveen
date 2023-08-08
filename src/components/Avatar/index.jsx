import React from 'react';
import AvatarImg from './profile_pic_new.JPG'
import HimalayanImg from './himalayan_1.png'
import './index.css';


const Avatar = () => {
    return (
        <div className='avatar-profile'>
            <div className='avatar'>
                <img className='profile-pic' src={AvatarImg} alt='avatar' />
                <img className='profile-pic' src={HimalayanImg} alt='avatar' />

                {/* <h2 className='title'><span>Hi! <br/> I'm Naveen Kairamkonda</span></h2> */}
            </div>
            <div className='profile-links'>

            </div>
        </div>
    )
}

export default Avatar;