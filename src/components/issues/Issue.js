import React from 'react';

const Issue = ({issue}) => {
    return (
        <li>
            <a href={issue.html_url} target="_blank">{issue.title}</a>
            {issue.repo}
        </li>
    )
}

export default Issue;