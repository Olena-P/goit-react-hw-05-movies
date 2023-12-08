import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import NotFound from "pages/NotFound/NotFound";
import { fetchTrendingMovies } from "api";
import MoviesList from "../../components/MovieList";

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

      <h1
        style={{
          fontSize: "24px",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Popular Movies
      </h1>
      {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
    </div>
  );
};

export default Home;
