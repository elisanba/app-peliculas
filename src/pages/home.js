import React from 'react';
import useFetch from '../hooks/useFetch';
export default function Home(){

    const movies = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=68b89921754fb0d6a3f1516adac9af54&language=es-ES&page=1');

    console.log(movies)
    return "estamos en home";
}