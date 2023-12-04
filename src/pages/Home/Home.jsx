import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: "8e21f34d58b1a578e492fe7e575bb39e",
            },
          }
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div
      style={{
        padding: "20px 50px",
        margin: "0 auto",
        maxWidth: "1280px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Popular Movies
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {trendingMovies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{
              textDecoration: "none",
              color: "#333",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  {movie.title}
                </h3>
                <p>{movie.vote_average}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
