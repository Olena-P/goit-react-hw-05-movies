import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "api";
import MoviesList from "../../components/MovieList";
import { debounce } from "lodash";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const performSearch = async (query) => {
      try {
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery) {
      const debouncedSearch = debounce(() => performSearch(searchQuery), 500);
      debouncedSearch();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div style={{ padding: "20px 50px", margin: "0 auto", maxWidth: "1280px" }}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{
            padding: "8px",
            marginRight: "8px",
            fontSize: "16px",
            width: "calc(100% - 80px)",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            fontSize: "16px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      <MoviesList movies={searchResults} />
    </div>
  );
};

export default Movies;
