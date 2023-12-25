import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFetch } from "./MovieSlice";
import Card from "../Components/Card/Card";

function MovieView() {
  const { movies, isLoadding, error } = useSelector((state) => state.movieList);

  const dispatch = useDispatch();
  const popularMovieUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  useEffect(() => {
    dispatch(movieFetch(popularMovieUrl));
  }, [dispatch]);

  return (
    <div>
      {isLoadding && <h5>Loadding....</h5>}
      {error && <h5>{error}</h5>}
      <h5 className="px-4 py-5 font-bold text-xl font-mono">Popular</h5>
      <section className="card-wrap">
          {movies.results &&
            movies.results.map((movie) =><Card key={movie.id} movie={movie}></Card>)
          }
      </section> 
    </div>
  );
}

export default MovieView;
