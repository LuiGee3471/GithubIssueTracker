import React from 'react';

const RepoHeader = ({counts}) => {
    return (
        <div>
            내가 등록한 Repository ({counts} 개)
        </div>
    )
}

export default RepoHeader;