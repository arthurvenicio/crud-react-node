import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch
      }}
    >
    {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a CountProvider");
  const { search, setSearch } = context;
  return { search, setSearch };
}