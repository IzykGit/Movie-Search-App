import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"


const SearchPage = (props) => {

    useEffect(() => {
        props.getDefaultMovies();
        AOS.init()
    }, []);
 
    useEffect(() => {  
        if (props.input.length === 0) {
            props.getDefaultMovies();
          } else if (props.input.length >= 1) {
            props.getMovieData();
          }
    }, [props.input])

  return (
    <div className="App">
        <div className='searchBarContainer'>
          <div>
            <h1>Search Movies, Shows, and Games</h1>
            <input onChange={((e) => props.setInput(e.target.value))} id='movieSearch'/>
          </div>
        </div>
        <div className='resultContainer'>
            {props.movie.map((Search) => (
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