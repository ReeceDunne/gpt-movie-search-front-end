"use client";
import { useState } from "react";
import { IoMdTrendingDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { MdAbc } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { TbBabyCarriage } from "react-icons/tb";
import { FaMale } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

const SortSearch = ({ results, setResults }) => {
  //   console.log(results);
  const [sortOrder, setSortOrder] = useState({
    rating: "desc",
    title: "asc",
    maturity: "asc",
    release: "asc",
    runtime: "desc",
  });

  const sortByRating = () => {
    const newOrder = sortOrder.rating === "desc" ? "asc" : "desc";
    const sortedResults = [...results].sort((a, b) =>
      newOrder === "asc"
        ? a.scores.averagedScore - b.scores.averagedScore
        : b.scores.averagedScore - a.scores.averagedScore
    );
    setSortOrder({ ...sortOrder, rating: newOrder });
    setResults(sortedResults);
  };

  const sortByName = () => {
    const newOrder = sortOrder.title === "asc" ? "desc" : "asc";
    const sortedResults = [...results].sort((a, b) =>
      newOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setSortOrder({ ...sortOrder, title: newOrder });
    setResults(sortedResults);
  };

  const sortByMaturityRating = () => {
    const newOrder = sortOrder.maturity === "asc" ? "desc" : "asc";
    const sortedResults = [...results].sort((a, b) =>
      newOrder === "asc"
        ? a.maturity_rating.localeCompare(b.maturity_rating)
        : b.maturity_rating.localeCompare(a.maturity_rating)
    );
    setSortOrder({ ...sortOrder, maturity: newOrder });
    setResults(sortedResults);
  };

  const sortByReleaseDate = () => {
    const newOrder = sortOrder.release === "asc" ? "desc" : "asc";
    const sortedResults = [...results].sort((a, b) => {
      const dateA = new Date(a.releaseDate.split("-").reverse().join("-"));
      const dateB = new Date(b.releaseDate.split("-").reverse().join("-"));
      return newOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setSortOrder({ ...sortOrder, release: newOrder });
    setResults(sortedResults);
  };

  const sortByRuntime = () => {
    const newOrder = sortOrder.runtime === "asc" ? "desc" : "asc";
    const sortedResults = [...results].sort((a, b) => {
      const runtimeA = parseInt(a.runtime);
      const runtimeB = parseInt(b.runtime);
      return newOrder === "asc" ? runtimeA - runtimeB : runtimeB - runtimeA;
    });
    setSortOrder({ ...sortOrder, runtime: newOrder });
    setResults(sortedResults);
  };

  return (
    <div className="flex gap-8 mt-4  justify-center">
      <button onClick={sortByRating}>
        {sortOrder.rating !== "asc" ? (
          <IoMdTrendingUp style={{ fontSize: "30px" }} />
        ) : (
          <IoMdTrendingDown style={{ fontSize: "30px" }} />
        )}
      </button>
      <button onClick={sortByName}>
        {sortOrder.title !== "asc" ? (
          <span className="flex items-center">
            <MdAbc style={{ fontSize: "30px" }} />{" "}
            <IoIosArrowDropup style={{ fontSize: "20px" }} />
          </span>
        ) : (
          <span className="flex items-center">
            <MdAbc style={{ fontSize: "30px" }} />
            {sortOrder.title === "asc" && (
              <IoIosArrowDropdown style={{ fontSize: "20px" }} />
            )}
          </span>
        )}
      </button>
      <button onClick={sortByMaturityRating}>
        {sortOrder.maturity === "asc" ? (
          <TbBabyCarriage style={{ fontSize: "25px" }} />
        ) : (
          <FaMale style={{ fontSize: "20px" }} />
        )}
      </button>
      <button onClick={sortByReleaseDate}>
        {sortOrder.release !== "asc" ? (
          <span className="flex items-center">
            <IoIosCalendar style={{ fontSize: "25px" }} />
            <IoIosArrowDropup style={{ fontSize: "20px" }} />
          </span>
        ) : (
          <span className="flex items-center">
            <IoIosCalendar style={{ fontSize: "25px" }} />
            <IoIosArrowDropdown style={{ fontSize: "20px" }} />
          </span>
        )}
      </button>
      <button onClick={sortByRuntime}>
        {sortOrder.runtime !== "asc" ? (
          <span className="flex items-center">
            <IoMdTime style={{ fontSize: "25px" }} />
            <IoIosArrowDropup style={{ fontSize: "20px" }} />
          </span>
        ) : (
          <span className="flex items-center">
            <IoMdTime style={{ fontSize: "25px" }} />
            <IoIosArrowDropup style={{ fontSize: "20px" }} />
          </span>
        )}
      </button>
    </div>
  );
};

export default SortSearch;
