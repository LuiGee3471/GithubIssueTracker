import React from 'react';
import SearchItem from './SearchItem';
import '../common/List.scss';
import './SearchResult.scss';

const SearchResult = ({ isVisible, items, onScrollResult, onClickResult }) => {
    return (
        isVisible ?
        <ul className="list search-result" onScroll={onScrollResult}>
            {items.map((item) => <SearchItem key={item.id} item={item} onClickResult={onClickResult} />)}
        </ul>
        : null
    )
};

export default SearchResult;