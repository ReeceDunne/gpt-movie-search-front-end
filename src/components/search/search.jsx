"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = (SearchProps) => {
    const {onSearch} = SearchProps;
    const placeholderValue = "Search movies by prompt..."
    const [value, setValue] = useState("");

    const searchHandler = (event) => {
        setValue(event.target.value)
    }

    const handleSearch = () => {
        if (value.trim() && value !== placeholderValue) {
            onSearch(value);
            setValue("");
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(value);
        }
      };

    return (
        <div className="relative w-full text-gray-600">
            <input 
            type="search" 
            name="search" 
            placeholder={placeholderValue} 
            value={value}
            className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" 
            onChange={searchHandler}
            onKeyDown={handleKeyDown}
            />
            <button type="submit" className="absolute right-0 top-- mt-3 mr-4 text-xl">
                <IoIosSearch onClick={handleSearch}/>
            </button>
        </div>
    )
}

export default Search;