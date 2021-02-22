import React from 'react';
import {useState} from "react";

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState({});

    /*useEffect(() => {
        const new_contactInfo = {
            name: 'Naveen Kairamkonda',
            mobileNumber: '+91 8341084619',
            email: 'naveen2379@gmail.com'
        }
        setContactInfo();
    }, [contactInfo]);*/

    const showContactInfo = () => {
        const new_contactInfo = {
            name: 'Naveen Kairamkonda',
            mobileNumber: '+91 8341084619',
            email: 'naveen2379@gmail.com'
        }
        if(contactInfo) {
            setContactInfo({})
        }
        else {
            setContactInfo(new_contactInfo);
        }
    }
    return (
        <div>
            <button onClick={showContactInfo}>Contact Info</button>
            {contactInfo ? contactInfo.mobileNumber : null}
        </div>
    )
}

export default ContactInfo;