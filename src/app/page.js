"use client";
import Search from "@/components/search/search";
import { useState } from "react";

export default function Home() {
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
    setHasSearched(true); // Mark that a search has been performed

    try {
      let response = await fetch(
        `http://localhost:8080/movies/discover?amount=5&prompt=${searchTerm}`
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm flex-inline">
        <Search onSearch={handleSearch} />

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
                    <img
                      src={movie.poster}
                      alt={movie.name}
                      className="w-48 h-72 object-cover rounded-lg"
                    />
                    <div className="mt-2">
                      <h3 className="text-lg font-bold">{movie.title}</h3>
                      <p className="text-gray-200">{movie.plot}</p>
                      <p className="text-sm text-gray-200">
                        Release Date: {movie.releaseDate}
                      </p>
                      <p className="text-sm text-gray-200">
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
