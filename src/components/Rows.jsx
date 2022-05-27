import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Rows = ({ title, fetchURL, cards }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  const items = movies.slice(0, cards);
  return (
    <>
      <div className="flex justify-start sm:justify-start py-4">
        <h2 className="text-gray-600 hover:text-sky-400 cursor-pointer sm:text-4xl p-4 inline-block">
          {title}
        </h2>
        <button
          type="button"
          className="text-white h-[40px] mt-5 bg-sky-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
        >
          View More
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="relative flex items-center">
        <div className="flex items-center flex-wrap justify-start sm:justify-center">
          {items.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rows;
