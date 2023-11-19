import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"


const SearchPage = ({ movie, getDefaultMovies, getMovieData, input, setInput }) => {

    useEffect(() => {
        getDefaultMovies();
        AOS.init()
    }, []);
 
    useEffect(() => {  
        if (input.length === 0) {
            getDefaultMovies();
          } else if (input.length >= 1) {
            getMovieData();
          }
    }, [input])

  return (
    <div className="App">
        <div className='searchBarContainer'>
          <div>
            <h1>Search Movies, Shows, and Games</h1>
            <input onChange={((e) => setInput(e.target.value))} id='movieSearch'/>
          </div>
        </div>
        <div className='resultContainer'>
            {movie.map((Search) => (
                <div key={Search.imdbID} className='movieCards'>
                <img id='movie' alt='Could not load' src={Search.Poster}/>
                <p id='title'>{Search.Title}</p>
              </div>
            ))}
        </div>
    </div>
  );
    
}

export default SearchPage;