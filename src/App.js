import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./movieDetails";
import SearchPage from "./searchPage";


const App = () => {

  const [movie, setMovie] = useState([])
  const [input, setInput] = useState("")


  const getDefaultMovies = async () => {
    try {
        const response = await fetch("http://www.omdbapi.com/?s=avengers&apikey=e5c057b"); 
        const data = await response.json();
        setMovie(data.Search || []);
    }   catch (err) {
    console.log(`Failed to get default movies: ${err}`);
    }
  };

    const getMovieData = async () => {
    try {
      const response = await fetch (`http://www.omdbapi.com/?s=${input}&apikey=e5c057b`) 
      const data = await response.json();
      setMovie(data.Search || [])
      console.log(data.Search)
    } catch (err) {
      console.log(`Failed to get movie ${err}`)
    }
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage input={input} setInput={setInput} getMovieData={getMovieData} getDefaultMovies={getDefaultMovies} movie={movie}/>} />
        <Route path="/movie_details/:imdbID" element={<MovieDetails getMovieData={getMovieData} movie={movie}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
