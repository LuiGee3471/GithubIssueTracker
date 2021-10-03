import React from 'react';
import Issue from './Issue';

const IssueList = ({issues}) => {
    return (
        <ul>
            {
                issues && issues.length ? 
                issues.map(issue => <Issue issue={issue} />)
                : <li>내가 등록한 Repository의 Issue가 없습니다.</li>
            }
        </ul>
    )
}

export default IssueList;