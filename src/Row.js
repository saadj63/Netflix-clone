import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css';
const baseURL="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl, isLargeRow}) {
const [movies, setMovies] = useState([]);
useEffect(() => {

        async function fetchdata(){
            const request = await axios.get(fetchUrl)
          
            setMovies(request.data.results);
            
            return request;
        }
        fetchdata();
}, []);



    return (

<div className="row">
            
<h2>{title}</h2>

<div className="row_posters">
    
    {  /*  POSTER */ }

    {movies.map(movie =>(
      
        <img className={`row_poster ${isLargeRow &&"row_posterLarge"}`}   key={movie.id} src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}` }alt={movie.name}/>
    ))}
    </div> 
           </div>
    )
}

export default Row

