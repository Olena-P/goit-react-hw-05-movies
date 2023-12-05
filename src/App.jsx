// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import NotFound from "./pages/NotFound/NotFound";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

// const Home = lazy(() => import("pages/Home"));
// const Movies = lazy(() => import("./pages/Movies"));
// const MovieDetails = lazy(() => import("pages/MovieDetails"));
// const NotFound = lazy(() => import("pages/NotFound"));
// const Cast = lazy(() => import("../src/components/Cast/Cast"));
// const Reviews = lazy(() => import("../src/components/Reviews/Reviews"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
