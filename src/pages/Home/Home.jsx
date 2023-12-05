import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import NotFound from "pages/NotFound/NotFound";
import { fetchTrendingMovies } from "api";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: "20px 50px",
        margin: "0 auto",
        maxWidth: "1280px",
      }}
    >
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {error && <NotFound />}
      {trendingMovies.length > 0 && (
        <div>
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
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
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
      )}
    </div>
  );
};

export default Home;
