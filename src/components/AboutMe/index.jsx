import React from 'react';
import './index.css';
import DownloadResume from "../DownloadResume";
import ContactInfo from "../ContactInfo";


const AboutMe = () => {
    return (
        <div className='about-me'>
            <p className='heading'>About Me</p>
            <p className='description'>Strong knowledge in development of rich user experienced web applications using ReactJS framework,
                using ReactJS with Redux flow, and using React Hooks with TDD (Test Driven Development) approach, HTML, CSS.
                Good understanding in consuming and working with RESTful web services, third-party libraries and code integration using git.
                Proficient in development of web applications using ArcGIS API for JavaScript and Web appBuilder tool for ArcGIS.
                Intrigued in finding breakthroughs for the real-time problems that benefit at a large scale.
            </p>
            <div className='resume-contact-info'>
                <DownloadResume />
                <ContactInfo />
            </div>
        </div>
    )
}

export default AboutMe;