import React from 'react';
import Repository from './Repository';
import './RepoList.scss';

const RepoList = ({ repos, setRepos }) => {
    const onClickDelete = (id) => {
        console.log(repos);
        delete repos[id];
        console.log(repos);
        setRepos({...repos});
    }

    return (
        <ul className="repo-list">
            {
                Object.values(repos).length ? 
                    Object.values(repos).map(repo => <Repository repo={repo} onClickDelete={onClickDelete} />)
                :   <li>등록한 Repository가 없습니다.</li>
            }
        </ul>
    )
}

export default RepoList;