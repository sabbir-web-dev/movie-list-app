import { AiFillStar } from "react-icons/ai";
import React from "react";

function Card({ movie }) {
  console.log(movie);
  const { title, vote_average, poster_path, popularity } = movie;

  return (
    <div className="card">
      <div className="">
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
      </div>
      <div className="p-2">
        <h4 className=" font-semibold">{title}</h4>
        <div className="flex items-center">
          <div className=" ">
            <AiFillStar className="c text-yellow-400" />
          </div>
          <p>{vote_average}</p>
        </div>

        <small className="flex justify-between align-center">
          <p>Popularity</p>
          <p>{popularity}</p>
        </small>
      </div>
    </div>
  );
}

export default Card;
