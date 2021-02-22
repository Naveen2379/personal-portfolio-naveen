import React from 'react';
import {useState} from "react";
import './index.css';



const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState({});

    const showContactInfo = () => {
        const new_contactInfo = {
            name: 'Naveen Kairamkonda',
            mobileNumber: '+91 8341084619',
            email: 'naveen2379@gmail.com'
        }
        console.log(contactInfo);
        if(Object.keys(contactInfo).length === 0) {
            console.log('inside if');
            setContactInfo(new_contactInfo);
        }
        else {
            console.log('inside else');
            setContactInfo({});
        }
    }
    return (
        <div className='contact-info'>
            <button className='button' onClick={showContactInfo}>Contact Info</button><br/>
            { contactInfo !== {} ? contactInfo.mobileNumber : null }
        </div>
    )
}

export default ContactInfo;