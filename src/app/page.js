"use client";
import Search from "@/components/search/search";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    console.log(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm flex-inline">
        <Search onSearch={handleSearch} />
        {searchValue && (
          <>
            <h2 className="text-2xl mt-20 mx-2 underline">Searched for: </h2>
            <p className="text-2xl mx-2">{searchValue}</p>
          </>
        )}
      </div>
    </main>
  );
}
