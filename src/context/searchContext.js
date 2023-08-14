"use client";
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [recentSearches, setRecentSearches] = useState([]);
  const [lastSearch, setLastSearch] = useState(""); // Add this state

  const addSearch = (query) => {
    const updatedSearches = [...recentSearches, query];
    setRecentSearches(updatedSearches);
    setLastSearch(query); // Update the last search query
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  return (
    <SearchContext.Provider value={{ recentSearches, addSearch, lastSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
