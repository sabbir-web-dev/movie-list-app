import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  isLoadding:false,
  error: null,
};

export const movieFetch = createAsyncThunk("movie-list/movieFetch", async () => {

const options = {
  method: 'GET',
  url: 'https://mdblist.p.rapidapi.com/',
  params: {s: 'jaws'},
  headers: {
    'X-RapidAPI-Key': '980f7a8e36mshc857a0fc85d5d87p16ac65jsn41391ec2b034',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
  }
};

const res = await axios.request(options);
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
      console.log("loadding")
    });

    builder.addCase(movieFetch.fulfilled, (state, action) => {
      state.isLoadding = false;
      state.movies = action.payload;
      state.error = false;
      console.log("data")
    });

    builder.addCase(movieFetch.rejected, (state,action) => {
      state.isLoadding = false;
      state.movies = [];
      state.error = action.error.message;
      console.log("error")
    })
  },
});

export const { showMovies, addMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
