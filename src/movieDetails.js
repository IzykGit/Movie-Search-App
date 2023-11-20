import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';



const MovieDetails = (props) => {

    const {imdbID} = useParams();
    console.log("Movie ID", imdbID)

    const [movie, setMovie] = useState({})
    const [plot, setPlot] = useState("")

    const getMovieData = async () => {
        try {
        const response = await fetch (`http://www.omdbapi.com/?i=${imdbID}&apikey=e5c057b`) 
        const data = await response.json();
        setMovie(data || {})
        setPlot(data.Plot)
        console.log(data)
        } catch (err) {
        console.log(`Failed to get movie ${err}`)
        }
    }

    Aos.init(({
        duration: 1000
    }))

    useEffect(() => {
        getMovieData()
        Aos.init()
    }, [])


    return (
        <div className='detailsContainer'>
            <div className='movieDetails'>
                <h1 data-aos-delay={100} data-aos="fade-down">{movie.Title}</h1>
                <p  data-aos-delay={300} data-aos="fade-down">{movie.Plot}</p>
                <h2 data-aos-delay={600} data-aos="fade-down">Directed By</h2>
                <p  data-aos-delay={800} data-aos="fade-down">{movie.Director}</p>
            </div>
            <div>
                <img className='movieImage' data-aos="fade-up" src={movie.Poster} alt={movie.Title}/>
            </div>

        </div>
    )
}

export default MovieDetails;