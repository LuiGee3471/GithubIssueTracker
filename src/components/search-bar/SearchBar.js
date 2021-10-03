import React, { useEffect, useRef, useState } from 'react';
import GithubAPI from '../../api/GithubAPI';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import './SearchBar.scss';

const SearchBar = ({repos, setRepos}) => {
    const [query, setQuery] = useState('');
    const [searchedItems, setSearchedItems] = useState([]);
    const [isResultVisible, setResultVisible] = useState(false);
    const firstRender = useRef(true);
    const page = useRef(1);
    const loadingData = useRef(false);

    useEffect(() => {        
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (!query) {
            setResultVisible(false);
            return;
        }

        const search = setTimeout(async () => {
            page.current = 1;
            const { totalCounts, items } = await GithubAPI.searchRepos(query, page.current);
            setSearchedItems(items || []);
            if (items) {
                setResultVisible(true);
            }
        }, 1000);

        return () => clearTimeout(search);
    }, [query]);

    const onScrollResult = async (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollHeight - scrollTop < clientHeight + 60 && !loadingData.current) {
            loadingData.current = true;
            page.current += 1;
            const { totalCounts, items } = await GithubAPI.searchRepos(query, page.current);
            searchedItems.push(...items);
            setSearchedItems([...searchedItems]);
            loadingData.current = false;
        }
    }

    const onClickResult = (item) => {
        repos[item.id] = item;
        setRepos({...repos});
        setResultVisible(false);
    }

    const onClickInput = () => {
        if (query) {
            setResultVisible(true);
        }
    }

    return (
        <form className="search-bar">
            <SearchInput 
                query={query}
                setQuery={setQuery}
                onClickInput={onClickInput}
            />
            <SearchResult 
                isVisible={isResultVisible}
                items={searchedItems}
                onScrollResult={onScrollResult}
                onClickResult={onClickResult}
            />
        </form>
    )
}

export default SearchBar;