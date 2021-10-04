import React, { useEffect, useRef, useState } from 'react';
import GithubAPI from '../../api/GithubAPI';
import Button from '../common/Button';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';

const Issues = ({repos}) => {
    const [issues, setIssues] = useState([]);
    const [isFinished, setFinished] = useState(false);
    const page = useRef(1);

    async function getIssue() {
        let newIssues = [];
        const promises = Object.values(repos).map(async repo => {
            return await GithubAPI.getIssues(repo.owner.login, repo.name, page.current);
        });
        const responses = await Promise.all(promises);
        responses.forEach((response) => newIssues.push(...response));
        if (newIssues.length === 0) {
            setFinished(true);
        } else {
            newIssues.sort((issue1, issue2) => Date.parse(issue2.created_at) - Date.parse(issue1.created_at));
            newIssues = newIssues.filter(issue => !issue.pull_request);
        }
        
        return newIssues;
    }

    useEffect(() => {
        (async function() {
            page.current = 1;
            const newIssues = await getIssue();
            setIssues(newIssues);
        })();
    }, [repos]); 

    const onClickMore = async () => {
        page.current += 1;
        const newIssues = await getIssue();
        issues.push(...newIssues);
        setIssues([...issues]);
    }

    return (
        <div style={{marginBottom: '10%'}}>
            <IssueHeader />
            <IssueList issues={issues} />
            { 
                isFinished ? 
                null :
                <Button buttonText="더 보기" onClick={onClickMore} />
            }
        </div>
    );
}

export default Issues;