import React ,{useState,useEffect} from 'react';
import axios from './axios';

function Row ({}) {

    const [movies,SetMovies] =useState([]);

    useEffect(() => {
        async function fetchData() {
            const request =await axios.get(Url);
            SetMovies(fetchData);
            return ;

        }
        fetchData();

    },[fetchUrl]);
}

console.log(movies);
return (
    <div className= "row">
        <h2> popular titles</h2>

        {movies.map(movie=> {
            return movies.sort=sorted movies
           
    </div>

        })