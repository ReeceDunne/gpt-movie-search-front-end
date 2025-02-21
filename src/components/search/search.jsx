"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Snackbar, Alert } from "@mui/material";

const Search = (SearchProps) => {
    const {onSearch, loading} = SearchProps;
    const placeholderValue = "Search movies by prompt..."
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchHandler = (event) => {
        setValue(event.target.value)
    }

    const handleSearch = () => {
        if (!value.trim() && value !== placeholderValue) {
            setError(true);
            return
        }
        onSearch(value)
        setValue("")
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
            onChange={searchHandler}
            onKeyDown={handleKeyDown}
            disabled={loading}
            autoFocus={true}
            className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" 
            />
            <button type="submit" disabled={loading} className="absolute right-0 top-- mt-3 mr-4 text-xl">
                <IoIosSearch onClick={handleSearch}/>
            </button>

            {/* MUI Snackbar */}
            <Snackbar 
                open={error} 
                onClose={() => setError(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert 
                    onClose={() => setError(false)} 
                    severity="error" 
                    sx={{ width: "100%" }}
                    variant="filled"
                >
                    Please enter a search prompt!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Search;