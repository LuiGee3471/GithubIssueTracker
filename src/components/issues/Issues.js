import React, { useEffect, useRef, useState } from 'react';
import GithubAPI from '../../api/GithubAPI';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';

const Issues = ({repos}) => {
    const [issues, setIssues] = useState([]);
    const page = useRef(1);
    useEffect(() => {
        async function getIssue() {
            const newIssues = [];
            const promises = Object.values(repos).map(async repo => {
                return await GithubAPI.getIssues(repo.owner.login, repo.name, page.current);
            });
            const responses = await Promise.all(promises);
            responses.forEach((response) => newIssues.push(...response));
            newIssues.sort((issue1, issue2) => Date.parse(issue2.created_at) - Date.parse(issue1.created_at));
            setIssues(newIssues);
        }

        getIssue();
    }, []);

    return (
        <>
            <IssueHeader />
            <IssueList issues={issues} />
        </>
    );
}

export default Issues;