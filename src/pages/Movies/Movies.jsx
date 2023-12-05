import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "api";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const performSearch = async () => {
      try {
        const results = await searchMovies(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    performSearch();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
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

      <ul style={{ listStyle: "none", padding: "0" }}>
        {searchResults.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "10px" }}>
            <Link
              to={`/movies/${movie.id}`}
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
