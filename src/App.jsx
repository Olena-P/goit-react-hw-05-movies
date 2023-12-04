import React, { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import NotFound from "components/NotFound/NotFound";

const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;

  &.active {
    color: orange;
    font-weight: bold;
  }
`;

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: " #333",
        }}
      >
        <nav
          style={{
            padding: "20px 50px",
            margin: "0 auto",
            maxWidth: "1280px",
          }}
        >
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
