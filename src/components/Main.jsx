import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requset";
import { RiHeartAddLine, RiHeartAddFill } from "react-icons/ri";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(requests.requestPopular.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };
  const items = movies.slice(0, 2);
  return (
    <>
      <div className="flex justify-center md:justify-start mb-40 md:m-4 md:mb-40 flex-wrap md:flex-nowrap">
        <div className="bg-white flex-2 w-[450px]">
          <h1 className="text-sky-400 text-4xl p-4">Discover</h1>
          <hr />
          <div className="flex justify-start">
            <div>
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestTopRated.title}
              </a>
              <p></p>
            </div>
          </div>
          <hr />
          <div className="flex justify-start">
            <div className="">
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestTrending.title}
              </a>
            </div>
          </div>
          <hr />
          <div className="flex justify-start">
            <div className="">
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestPopular.title}
              </a>
            </div>
          </div>
          <hr />
          <div className="flex justify-start">
            <div className="">
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestUpcoming.title}
              </a>
            </div>
          </div>
          <hr />
          <div className="flex justify-start">
            <div>
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestTopRated.title}
              </a>
            </div>
          </div>
          <hr />
          <div className="flex justify-start">
            <div className="">
              <a
                href="/"
                className="p-4 inline-block text-xl text-gray-500 hover:text-sky-400"
              >
                {requests.requestTrending.title}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center flex-wrap md:flex-nowrap">
          {items.map((item, id) => (
            <div className="w-[410px] max-w-sm bg-white rounded-lg shadow-md inline-block cursor-pointer relative m-2 dark:border-gray-700 mt-44 md:mt-0">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt={item?.title}
                key={id}
              />
              <p>
                {!like ? (
                  <RiHeartAddLine className="absolute top-2 right-2 text-4xl text-bold text-gray-300" />
                ) : (
                  <RiHeartAddFill className="absolute top-2 right-2 text-4xl text-bold text-gray-300" />
                )}
              </p>
              <div className="absolute top-0 left-0 w-full md:h-[432px] h-[180px] md:mb-[0] hover:bg-sky-600/80 opacity-0 hover:opacity-100 text-white transition ease-in-out hover:transition-all lg:flex">
                <p className="white-space-normal text-xl md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {truncateString(item.overview, 150)}
                </p>
              </div>
              <div className="px-5 pb-5 bg-white mb-20 md:mb-0">
                <h5 className="text-xl tracking-tight text-gray-900 dark:text-gray-600">
                  {item?.title}
                </h5>
                <div className="flex flex-col mt-2.5 mb-5">
                  <p className="text-sky-400">{item.vote_count} Vote</p>
                  <p className="text-gray-400 text-opacity-60">
                    {item?.release_date}
                  </p>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
