import React, { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import NotFound from "components/NotFound/NotFound";

const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <div>
      <div>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
