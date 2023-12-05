import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          listStyle: "none",
          padding: "16px 0 0",
          margin: 0,
        }}
      >
        {cast.map((actor) => (
          <li
            key={actor.id}
            style={{
              width: "150px",
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width={150}
                style={{ borderRadius: "4px" }}
              />
            )}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                margin: "8px 0",
              }}
            >
              {actor.name}
            </p>
            <p>
              <strong>Character:</strong> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
