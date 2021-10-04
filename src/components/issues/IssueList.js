import React from 'react';
import Issue from './Issue';
import '../common/List.scss';

const IssueList = ({issues}) => {
    return (
        <ul className="list">
            {
                issues && issues.length ? 
                issues.map(issue => <Issue key={issue.id} issue={issue} />)
                : <li>내가 등록한 Repository의 Issue가 없습니다.</li>
            }
        </ul>
    )
}

export default IssueList;