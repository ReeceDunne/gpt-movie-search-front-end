"use client";
import Searchbar from "@/components/search/search";
import { useState } from "react";

export default function Search() {
  const MOVIE_SEARCH_API = process.env.NEXT_PUBLIC_MOVIE_SEARCH_API;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const searchMessages = [
    "Digging through the archives for something awesome... 🎞️",
    "Exploring the world of movies... 🌍",
    "Uncovering hidden cinematic gems... 💎",
    "On a movie hunt, hold tight... 🏹",
    "Grab some popcorn while we search... 🍿",
    "Tracking down movie masterpieces... 🕵️",
    "On a quest for the next great movie... 🧑‍🚀",
  ];
  const randomMessage =
    searchMessages[Math.floor(Math.random() * searchMessages.length)];
  const getMovies = async (searchTerm) => {
    setLoading(true);
    setHasSearched(true);

    try {
      let response = await fetch(
        `${MOVIE_SEARCH_API}?amount=5&prompt=${searchTerm}`
      );
      const data = await response.json();
      setResults(data.movies && data.movies.length > 0 ? data.movies : []);
    } catch (error) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = async (value) => {
    await getMovies(value);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-start p-24 pb-10">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm flex-inline">
        <Searchbar onSearch={handleSearch} loading={loading} />
        {/* Show loading state */}
        {loading && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-500 font-medium">{randomMessage}</p>
          </div>
        )}
        {!loading && hasSearched && results && (
          <>
            <ul className="mt-4">
              {results.length > 0 ? (
                results.map((movie, index) => (
                  <li
                    key={index}
                    className="p-4 border-b flex flex-col items-center text-center"
                  >
                    <a
                      href={`https://www.imdb.com/title/${movie.imdbID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={movie.poster}
                        alt={`Poster of ${movie.title}`}
                        className="w-48 h-72 object-cover rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                      />
                    </a>
                    <div className="mt-2">
                      <a
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                        target="_blank" // Optional: to open in a new tab
                        rel="noopener noreferrer" // Optional: security feature
                        className="text-lg font-bold hover:text-blue-500"
                      >
                        {movie.title}
                      </a>
                      <p className="text-gray-200 mt-2">{movie.plot}</p>
                      <p className="text-sm text-gray-200 mt-2">
                        Release Date: {movie.releaseDate}
                      </p>
                      <p className="text-sm text-gray-200 mt-2">
                        Runtime: {movie.runtime}
                      </p>
                      <div className="mt-2 flex justify-center gap-2">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                          IMDb: {movie.scores.imdb}
                        </span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                          RT: {movie.scores.rottenTomatoes}
                        </span>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                          Avg: {movie.scores.averagedScore}
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-gray-400 text-center mt-4">
                  No results found
                </p>
              )}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
