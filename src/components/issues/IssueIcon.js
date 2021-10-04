import React from 'react';
import './Issue.scss';

const IssueIcon = ({state}) => {
    return (
        <svg width="16" height="16" className="icon">
            {
                state === 'open' ?
                <>
                    <circle cx="8" cy="8" r="7.5" stroke="#1a7f37" stroke-width="1" fill="white"/>
                    <circle cx="8" cy="8" r="1" stroke="#1a7f37" stroke-width="1" fill="#1a7f37"/>
                </> 
                :
                <>
                    <circle cx="8" cy="8" r="7.5" stroke="#cf222e" stroke-width="1" fill="white"/>
                    <path stroke-width="1.5" stroke="#cf222e" d="M4 8 l3 3" />
                    <path stroke-width="1.5" stroke="#cf222e" d="M7 11 l5 -5" />
                </>
            }
        </svg>
    )
}

export default IssueIcon;