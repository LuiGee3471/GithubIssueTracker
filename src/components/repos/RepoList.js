import React from 'react';
import Repository from './Repository';
import '../common/List.scss';

const RepoList = ({ repos, setRepos }) => {
    const onClickDelete = (id) => {
        delete repos[id];
        setRepos({...repos});
    }

    return (
        <ul className="list">
            {
                Object.values(repos).length ? 
                    Object.values(repos).map(repo => <Repository key={repo.id} repo={repo} onClickDelete={onClickDelete} />)
                :   <li>등록한 Repository가 없습니다.</li>
            }
        </ul>
    )
}

export default RepoList;