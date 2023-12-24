import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Features/MovieSlice";

const store = configureStore({
  reducer:{
    movieList : MovieSlice
  }
});

export default store;