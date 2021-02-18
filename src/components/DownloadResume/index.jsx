import React from 'react';
import Header from "../Header";
import Introduction from "../Introduction";
import Content from "../Content";

import './index.css';


const DownloadResume = () => {
    const downloadResume = () => {
        window.location.href = "Naveen_Kairamkonda_Resume.pdf"
    }

    return (
        <div className='download-resume'>
            <a className='button' href='Naveen_Kairamkonda_Resume.pdf' download>Download Resume</a>
        </div>
    )
}

export default DownloadResume;