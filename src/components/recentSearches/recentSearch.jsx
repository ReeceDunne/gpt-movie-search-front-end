"use client";
import React, { useState, useRef, useEffect } from "react";

const RecentSearch = ({ searchHistory, setValue }) => {
  const [showMenu, setShowMenu] = useState(false); // Controls visibility of recent search menu
  const menuRef = useRef(null); // Ref to detect click outside
  const buttonRef = useRef(null); // Ref to detect click on the button

  // Toggle the menu visibility
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full flex justify-center mt-6">
      <button
        ref={buttonRef}
        onClick={toggleMenu} // Toggle menu visibility
        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold z-10"
      >
        {showMenu ? "Hide Recent Searches" : "Show Recent Searches"}
      </button>

      {showMenu && (
        <div
          ref={menuRef}
          className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-80 bg-gray-800 shadow-lg rounded-lg p-4 z-20"
        >
          <h4 className="font-bold mb-2 text-white text-center">
            Recent Searches
          </h4>
          <ul>
            {searchHistory.map((term, index) => (
              <li
                key={index}
                className="cursor-pointer text-white hover:text-blue-500 py-1 text-center"
                onClick={() => {
                  setValue(term); // Set the search input to the clicked term
                  setShowMenu(false); // Close the menu after selection
                }}
              >
                {term}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
