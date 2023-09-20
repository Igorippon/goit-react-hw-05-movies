import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from "react";


const Home = lazy(() => import("../pages/Home.js"));
const Movies = lazy(() => import("../pages/Movies.js"));
const MovieDetails = lazy(() => import("../pages/MovieDetails.js"));
const Reviews = lazy(() => import("./Reviews/Reviews.js"));
const Cast = lazy(() => import("./Cast/Cast.js"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

