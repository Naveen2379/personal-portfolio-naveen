import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import DownloadResume from "../DownloadResume";
import ContactInfo from "../ContactInfo";
import useOnlineStatus from '../../utils/useOnlineStatus';


const AboutMe = () => {
    const dynamicRoles = [
        'ReactJS Developer', 
        'Wanderer'
    ]
    const [placeholder, setPlaceholder] = useState('');
    const [hasRemoveCharStart, setRemoveCharStart] = useState(false)
    const counterRef = useRef(0)
    const onlineStatus = useOnlineStatus()
    
    useEffect(() => {
        const tick = (role, action) => {
            if(action === 'add') {
                setPlaceholder((prev) => prev+role.charAt(counterRef.current))
                counterRef.current++;
            }
            if(action === 'remove') {
                setPlaceholder((prev) => prev.slice(0, counterRef.current-1))
                counterRef.current--;
            }
        }
        const currentRole = dynamicRoles[0]
        const intervalID = setInterval(() => {
            console.log('currentRole ', currentRole)
            if(placeholder.length === currentRole.length) {
                console.log('placeholder ', placeholder)
                console.log(' placholder & currentRol same ')
                setRemoveCharStart(true)
            }
            if(counterRef.current < currentRole.length && !hasRemoveCharStart) {
                console.log('placeholder ', placeholder)
                tick(currentRole, 'add')
            }
            if(counterRef.current > 0 && hasRemoveCharStart) {
                console.log('placeholder ', placeholder)
                tick(placeholder, 'remove')
            }
        }, 200);
        if(!placeholder.length && hasRemoveCharStart && counterRef.current === 0) {
            setRemoveCharStart(false)
        }
        console.log('placeholder ', placeholder)

        return () => clearInterval(intervalID)

    }, [placeholder, hasRemoveCharStart])

    
    // const [message, setMessage] = useState('breathe in');
    // useEffect(() => {
    //     console.log('useEffect')
    //     const interval = setInterval(() => {
    //         console.log('msg ', message)
    //         setMessage((msg) => msg === 'breathe in' ? 'breathe out' : 'breathe in');
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='about-me'>
            {/* add font */}
            <p className='heading'>Naveen Kairamkonda {onlineStatus && "💚"}</p>
            <p> I am a <span className='border-rght'>{placeholder}</span></p>

            {/* <p className='heading'>About Me</p>
            <p className='description'>Strong knowledge in development of rich user experienced web applications using ReactJS framework,
                using ReactJS with Redux flow, and using React Hooks with TDD (Test Driven Development) approach, HTML, CSS.
                Good understanding in consuming and working with RESTful web services, third-party libraries and code integration using git.
                Proficient in development of web applications using ArcGIS API for JavaScript and Web appBuilder tool for ArcGIS.
                Intrigued in finding breakthroughs for the real-time problems that benefit at a large scale.
            </p> */}
            <div className='resume-contact-info'>
                <DownloadResume />
                <ContactInfo />
            </div>
        </div>
    )
}

export default AboutMe;