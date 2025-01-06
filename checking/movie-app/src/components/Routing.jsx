import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";
const Routing = () => {
  return <>
  <Routes>
    <Route path="/" element={<MovieList title='Your best site to see the movie' apiPath="movie/now_playing" />} />
    <Route path="/movie/popular" element={<MovieList title='Popular Movie' apiPath="movie/popular" />} />
    <Route path="/movie/top" element={<MovieList title='Upcomming Movie' apiPath="movie/top_rated" />} />
    <Route path="/movie/upcomming" element={<MovieList title='Top Rated Movie' apiPath='movie/upcoming' />} />
    <Route path="/movie/:id" element={<MovieDetails/>} />
    <Route path="/movie/search" element={<Search />} />
  </Routes>
  </>;
};


export default Routing;
