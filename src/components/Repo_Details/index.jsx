import React from "react";


const Repo_Details = ({details}) => {

    return (
        <div>
            <h5>repo: <span><b>{details.name}</b></span></h5>
            <a href={`${details.html_url}`}>{details.name}</a>
        </div>

    )
}

export default Repo_Details;