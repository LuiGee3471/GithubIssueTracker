import React from 'react';
import '../common/Header.scss';

const RepoHeader = ({counts}) => {
    return (
        <div className="semi-header">
            내가 등록한 Repository ({counts} 개)
        </div>
    )
}

export default RepoHeader;