import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import "react-tabs/style/react-tabs.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: "8e21f34d58b1a578e492fe7e575bb39e",
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
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
            onClick={goBack}
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
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt=""
              height={300}
              style={{
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
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
