import React from "react";
import { Link, useLocation } from "react-router-dom";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "fit-content",
        listStyle: "none",
        padding: "0",
        gap: "16px",
      }}
    >
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          state={{ from: location }}
          style={{
            textDecoration: "none",
            color: "#333",
            width: "280px",
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
          <div>
            <div style={{ display: "block", width: "100%", height: "400px" }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt=""
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px 8px 0 0",
                  boxSizing: "border-box",
                  objectFit: "cover",
                }}
              />
            </div>
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
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
