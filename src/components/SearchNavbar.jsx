import React from "react";

const SearchNavbar = () => {
  return (
    <>
      <div className="bg-white md:w-full w-auto  flex md:items-center md:justify-between pr-6 z-[100} flex-wrap md:flex-nowrap">
        <div className="md:p-4 p-2">
          <a
            href="/"
            className="md:p-6 p-2 text-gray-500 text-bold hover:text-sky-400"
          >
            Browse Categories
          </a>
          <a
            href="/"
            className="md:p-6 p-2 text-gray-500 text-bold hover:text-sky-400"
          >
            What's New
          </a>
          <a
            href="/"
            className="md:p-6 p-2 text-gray-500 text-bold hover:text-sky-400"
          >
            Trending
          </a>
          <a
            href="/"
            className="md:p-6 p-2 text-gray-500 text-bold hover:text-sky-400"
          >
            For You
          </a>
          <a
            href="/"
            className="md:p-6 p-2 text-gray-500 text-bold hover:text-sky-400"
          >
            Shop Products
          </a>
          <input
            className="revue-form-field bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 md:w-[540px] md:ml-16 pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search GrabOne"
          />
        </div>
      </div>
    </>
  );
};

export default SearchNavbar;
