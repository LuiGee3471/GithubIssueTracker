import React from 'react';
import RepoList from './RepoList';
import RepoHeader from './RepoHeader'

const Repos = ({ repos, setRepos }) => {
    return (
        <>
            <RepoHeader counts={Object.keys(repos).length} />
            <RepoList repos={repos} setRepos={setRepos} />
        </>
    )
}

export default Repos;

