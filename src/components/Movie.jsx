import React, { useState } from "react";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  // setLike is for the like button  to change it from unliked to liked...

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };
  return (
    <div className="w-[310px] max-w-sm bg-white rounded-lg shadow-md inline-block cursor-pointer relative m-2 dark:border-gray-700">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <p>
        {!like ? (
          <RiHeartAddLine className="absolute top-2 right-2 text-4xl text-bold text-gray-300" />
        ) : (
          <RiHeartAddFill className="absolute top-2 right-2 text-4xl text-bold text-gray-300" />
        )}
      </p>
      <div className="absolute top-0 left-0 w-full h-[175px] hover:bg-sky-600/80 opacity-0 hover:opacity-100 text-white transition ease-in-out hover:transition-all lg:flex">
        <p className="white-space-normal text-xl md:text-sm font-bold flex justify-center items-center h-full text-center">
          {truncateString(item.overview, 150)}
        </p>
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl tracking-tight text-gray-900 dark:text-gray-600">
          {item?.title}
        </h5>
        <div className="flex flex-col mt-2.5 mb-5">
          <p className="text-sky-400">{item.vote_count} Vote</p>
          <p className="text-gray-400 text-opacity-60">{item?.release_date}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sky-300">Rating:</p>
        </div>
        <div className="flex justify-between items-center">
          <a href="/" className="text-gray-400 text-opacity-60 ">
            {item.popularity} Watched
          </a>
          <span className="text-3xl font-bold text-gray-900 dark:text-sky-400">
            {item.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
