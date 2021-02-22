import React, {useEffect, useState} from 'react';
import './index.css';
import Repo_Details from "../Repo_Details";


const Works = () => {
    console.log('Works');
    const [repos, setRepos] = useState([]);
    useEffect( () => {
        async function ListAllRepos() {
            const response = await fetch('https://api.github.com/users/naveen2379/repos');
            if(!response.ok) {
                throw new Error(`An error has occured ', ${response.status}`);
            }
            const returnedRepos = response.json();
            return returnedRepos;
        }
        ListAllRepos()
            .then( (repos) => {
                setRepos(repos, console.log(repos));
            })
            .catch( err => console.log(err));

    }, []);

    return (
        <div className='works'>
            <h1>Works</h1>
            <div className='repo-details'>
                {repos && repos.map( (repo) => {
                    return <div key={repo.id}>
                        <Repo_Details details={repo} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Works;