import React from 'react';
import './SearchItem.scss';

const SearchItem = ({item, onClickResult}) => {
    const onClickItem = () => {
        onClickResult(item);
    }

    return (
        <li key={item.id} className="search-item" onClick={onClickItem}>
            {item.name}
        </li>
    )
};

export default SearchItem;