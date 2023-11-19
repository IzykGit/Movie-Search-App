import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './movieDetails'
import SearchPage from "./searchPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie_details" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
