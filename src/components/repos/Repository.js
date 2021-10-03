import React from 'react';
import Button from '../common/Button';
import './Repository.scss';

const Repository = ({ repo, onClickDelete }) => {
    return (
        <li className="repository">
            {repo.name}
            <Button onClick={() => onClickDelete(repo.id)} buttonText="삭제" isSecondary={true}/>
        </li>
    )
}

export default Repository;