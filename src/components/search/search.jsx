"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const SearchProps = {
    onSearch: (value) => {}
  };

const Search = (SearchProps) => {
    const {onSearch} = SearchProps;
    const placeholderValue = "Search movies by prompt..."
    const [value, setValue] = useState(placeholderValue)

    const searchHandler = (event) => {
        const {target} = event;
        setValue(target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearch(value)
        }
    }

    const handleClick = () => {
        onSearch(value);
      };

    return (
        <div className="relative w-full text-gray-600">
            <input 
            type="search" 
            name="search" 
            placeholder={placeholderValue} 
            className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" 
            onChange={searchHandler}
            onKeyDown={handleKeyDown}
            />
            <button type="submit" className="absolute right-0 top-- mt-3 mr-4 text-xl">
                <IoIosSearch onClick={handleClick}/>
            </button>
        </div>
    )
}

export default Search;