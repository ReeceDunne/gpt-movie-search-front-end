"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const [value, setValue] = useState("Search movies by prompt...")

    const searchHandler = (event) => {
        const {target} = event
        setValue(target.value)
        console.log(value)
    }

    return (
        <div className="relative w-full text-gray-600">
            <input type="search" 
            name="search" 
            placeholder={value} 
            className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" 
            onChange={searchHandler}/>
            <button type="submit" className="absolute right-0 top-- mt-3 mr-4 text-xl">
                <IoIosSearch/>
            </button>
        </div>
    )
}

export default Search;