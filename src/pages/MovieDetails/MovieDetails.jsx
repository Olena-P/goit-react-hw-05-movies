import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import "react-tabs/style/react-tabs.css";
import { fetchMovieDetails } from "api";
import { RotatingLines } from "react-loader-spinner";
import NotFound from "pages/NotFound/NotFound";
import { useWindowSize } from "hooks/useWindowSize";
import breakpoints from "theme/breakpoints";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Something went wrong while fetching movie details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const navigate = useNavigate();
  const location = useLocation();
  const goBack = location?.state?.from ?? "/";

  const handleGoBack = () => {
    navigate(goBack);
  };

  const { width } = useWindowSize();

  const getStyles = () => ({
    flexDirection: width < breakpoints.sm ? "column" : "row",
    alignItems: width < breakpoints.sm ? "center" : "flex-start",
  });

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
      {movieDetails && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "20px 50px",
            margin: "0 auto",
            maxWidth: "1280px",
          }}
        >
          <button
            onClick={handleGoBack}
            style={{
              width: "200px",
              backgroundColor: "#ffcc00",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#000",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              border: "none",
            }}
          >
            &#8592; Go Back
          </button>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              marginTop: "20px",
              ...getStyles(),
            }}
          >
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h1
                style={{
                  fontSize: "24px",
                }}
              >
                {movieDetails.title}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                }}
              >
                <strong>Overview:</strong> {movieDetails.overview}
              </p>
              <p>
                <strong>Release Date:</strong> {movieDetails.release_date}
              </p>
              <p>
                <strong>Vote Average:</strong> {movieDetails.vote_average}
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>

          <Tabs
            style={{
              marginTop: "20px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <TabList
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                gap: "20px",
              }}
            >
              <Tab
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  borderBottom: "2px solid transparent",
                  paddingBottom: "8px",
                }}
              >
                Cast
              </Tab>
              <Tab
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  borderBottom: "2px solid transparent",
                  paddingBottom: "8px",
                }}
              >
                Reviews
              </Tab>
            </TabList>
            <TabPanel>
              <Cast />
            </TabPanel>
            <TabPanel>
              <Reviews />
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
