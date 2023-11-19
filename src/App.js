import { useState, useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  const [movie, setMovie] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    getDefaultMovies();
    AOS.init()
  }, []);

  useEffect(() => {  
    return () => {
      getMovieData()
    }
  }, [input])

  const getDefaultMovies = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?s=avengers&apikey=e5c057b"); 
      const data = await response.json();
      setMovie(data.Search || []);
    } catch (err) {
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
    <div className="App">
        <div className='searchBarContainer'>
          <div>
            <h1>Search Movie</h1>
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


export default App;
