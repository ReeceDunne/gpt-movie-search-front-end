"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import RecentSearch from "../recentSearches/recentSearch";
import { IoIosSearch } from "react-icons/io";
import { Snackbar, Alert } from "@mui/material";

const Search = (SearchProps) => {
  const { onSearch, loading } = SearchProps;
  const { user } = useUser();
  const placeholderValue = "Search movies by prompt...";
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (user) {
      const savedHistory =
        JSON.parse(localStorage.getItem(`searchHistory-${user.sub}`)) || [];
      setSearchHistory(savedHistory);
    }
  }, [user]);

  const saveSearch = (term) => {
    if (!user) return; // Ensure user is logged in
    let updatedHistory = [
      term,
      ...searchHistory.filter((item) => item !== term),
    ].slice(0, 5);
    setSearchHistory(updatedHistory);
    localStorage.setItem(
      `searchHistory-${user.sub}`,
      JSON.stringify(updatedHistory)
    );
  };

  const handleSearch = () => {
    if (!value.trim() && value !== placeholderValue) {
      setError(true);
      return;
    }
    onSearch(value);
    saveSearch(value);
    setValue("");
  };

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
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        autoFocus={true}
        autoComplete="off"
        className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="absolute right-0 top-- mt-3 mr-4 text-xl"
      >
        <IoIosSearch onClick={handleSearch} />
      </button>

      {/* Show Last 5 Searches */}
      {!loading && searchHistory.length > 0 && (
        <RecentSearch searchHistory={searchHistory} setValue={setValue} />
      )}

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
  );
};

export default Search;
