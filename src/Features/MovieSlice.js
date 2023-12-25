import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoadding:false,
  error: null,
};

export const movieFetch = createAsyncThunk("movie-list/movieFetch", async (url) => {

const res = await axios.request(url);
return res.data

});

export const MovieSlice = createSlice({
  name: "movie-list",
  initialState: initialState,
  reducers: {
    showMovies: (state) => state,
    addMovie: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(movieFetch.pending, (state) => {
      state.isLoadding = true;
    });

    builder.addCase(movieFetch.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isLoadding = false;
      state.error = null;

    });

    builder.addCase(movieFetch.rejected, (state,action) => {
      state.isLoadding = false;
      state.movies = [];
      state.error = action.error.message;
    })
  },
});

export const { showMovies, addMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
