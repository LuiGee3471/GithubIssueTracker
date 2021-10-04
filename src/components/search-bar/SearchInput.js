import React from 'react';
import './SearchInput.scss';

const SearchInput = ({query, setQuery, onClickInput}) => {
    const onChange = (e) => {
        if (query !== e.target.value) {
            setQuery(e.target.value);
        }
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    return (
        <input placeholder="검색할 Repository 이름 입력" onClick={onClickInput} onKeyDown={onKeyDown} className="search-input" type="text" value={query} onChange={onChange} />
    )
}

export default SearchInput;