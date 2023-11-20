import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



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

    useEffect(() => {
        getMovieData()
    }, [])


    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </div>
    )
}

export default MovieDetails;