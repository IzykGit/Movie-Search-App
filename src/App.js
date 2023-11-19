import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [movie, setMovie] = useState([])
  const [input, setInput] = useState("")
  const [ImageSource, setImageSource] = useState('')

  useEffect(() => {
    getDefaultMovies();
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

  const currentMovie = (poster) => {
    setImageSource(poster);
  };

 function hideImg() {
  setImageSource('');
 }

  return (
    <div className="App">
        <div className='searchBarContainer'>
            <div className='searchBar'>
              <h1>Search Movie</h1>
              <input onChange={((e) => setInput(e.target.value))} id='movieSearch'/>
            </div>
            <div>
              <img src={ImageSource} onError={hideImg} id='movieImage' alt=''/>
            </div>
        </div>
        <div className='resultContainer'>
            {movie.map((Search) => (
                <div key={Search.imdbID} className='movieCards'>
                <img id='movie' onMouseOver={() => currentMovie(Search.Poster)} onMouseOut={hideImg} alt='Could not load' src={Search.Poster}/>
              </div>
            ))}
        </div>
    </div>
  );
}

export default App;
