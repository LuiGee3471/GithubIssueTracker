import React from 'react';
import SearchItem from './SearchItem';
import './SearchResult.scss';

const SearchResult = ({ isVisible, items, onScrollResult, onClickResult }) => {
    return (
        isVisible ?
        <ul className="search-result" onScroll={onScrollResult}>
            {items.map((item) => <SearchItem item={item} onClickResult={onClickResult} />)}
        </ul>
        : null
    )
};

export default SearchResult;