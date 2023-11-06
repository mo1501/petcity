import React, { useState, useEffect, useCallback } from "react";

import { ReactComponent as SearchIcon } from '../../../assets/images-svgs/search.svg';

import "./search-bar.styles.css";
import SearchResults from "../../search-results/search-results.component";

const SearchBar = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    console.log('search results', searchResults);
    console.log('search query', searchQuery);
    // Handle changes in search query here
    const handleSearch = useCallback((query) => {
        const filteredResults = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [products]);

    // Update search results when the searchQuery changes

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery,handleSearch]);

   


    return (
        <div className="search-bar">
            <SearchIcon className='search-icon' />
            <input
                className='search-input'
                type="search"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {searchQuery && (
                <div className="search-results-dropdown">
                    {searchResults.map((product) => (
                        <SearchResults id={product.id} product={product}  />
                    ))}
                </div>

            )}
        </div>
    );
};

export default SearchBar;
