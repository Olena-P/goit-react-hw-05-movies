import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "api";
import { RotatingLines } from "react-loader-spinner";
import NotFound from "pages/NotFound/NotFound";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error("Error fetching movie credits:", error);
        setError("Something went wrong while fetching movie credits.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

  return (
    <>
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
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width={150}
                style={{ borderRadius: "4px" }}
              />
            ) : (
              <img src={defaultImg} alt={actor.name} width={150} />
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
