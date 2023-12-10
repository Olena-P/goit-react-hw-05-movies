import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "api";
import MoviesList from "../../components/MovieList";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [searchResults, setSearchResults] = useState([]);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query.trim()) return;

    const performSearch = async (query) => {
      try {
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    (async () => {
      await performSearch(query);
    })();
  }, [query]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 50px",
        margin: "0 auto",
        maxWidth: "1280px",
      }}
    >
      <form onSubmit={handleSearchSubmit} style={{ width: "100%" }}>
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
