import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieFetch } from './MovieSlice';

function MovieView() {
  const {movies,isLoadding,error}= useSelector(state => state.movieList);

  const dispatch = useDispatch();

  console.log(movies);

  useEffect(() => {
    dispatch(movieFetch())
  })
  
  return (
    <div>
     {isLoadding && <h5>Loadding....</h5>}
     {error && <h5>{error.message}</h5>}
     {movies && 
      movies.search.map(movie => <h1>hi</h1> )
     }
    </div>
  )
}

export default MovieView
