import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"



const SearchPage = ({ movie, getDefaultMovies, getMovieData, input, setInput }) => {

    AOS.init(({
      duration: 1000
    }))

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

    const navigate = useNavigate();

    function route(imdbID) {
      navigate(`/movie_details/${imdbID}`)
    }

  return (
    <div className="App">
        <div className='searchBarContainer'>
          <div>
            <input placeholder='Search' onChange={((e) => setInput(e.target.value))} id='movieSearch'/>
          </div>
        </div>
        <div className='resultContainer'>
            {movie.map((Search) => (
                <div key={Search.imdbID} className='movieCards'>
                <img onClick={() => route(Search.imdbID)} id='movie' alt='Could not load' src={Search.Poster}/>
                <p id='title'>{Search.Title}</p>
              </div>
            ))}
        </div>
    </div>
  );
    
}

export default SearchPage;