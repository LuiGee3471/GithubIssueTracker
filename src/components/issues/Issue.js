import React from 'react';
import './Issue.scss';
import IssueIcon from './IssueIcon';

const Issue = ({issue}) => {
    return (
        <li className="issue">
            <a href={issue.html_url} target="_blank" rel="noreferrer" className="link">
            <div className="align-center">
                <IssueIcon state={issue.state} />
                <span className="title ellipsis">{issue.title}</span>
            </div>
            <span className="repo">{issue.repo}</span>
            </a>
        </li>
    )
}

export default Issue;