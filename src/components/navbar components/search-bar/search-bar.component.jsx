import React from "react";

import { ReactComponent as SearchIcon } from '../../../assets/images-svgs/search.svg';

import "./search-bar.styles.css";


const SearchBar = () => {
    return (


        <div className="search-bar">
            <input  className='search-input ' type="search" placeholder="Search for products..." />
            <SearchIcon className='search-icon'/>

        </div>



    );
};


export default SearchBar;
