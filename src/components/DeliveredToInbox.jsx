import React from "react";

const DeliveredToInbox = () => {
  return (
    <>
      <div className=" flex items-center h-[150px] rounded-lg sm:justify-center sm:flex-wrap sm:h-[400px] ">
        <div className="text-2xl bg-white md:h-[150px] flex items-center h-[400px] sm:flex-wrap sm:justify-center ">
          <label htmlFor="email" className="ml-6 p-6 text-sky-400">
            Get the best deals delivered direct to your inbox each day
          </label>
          <input
            type="email"
            className="p-4 pl-10 text-sm text-gray-900 w-[400px] h-[40px] bg-gray-50  border border-gray-300 focus:ring-gray-600 focus:border-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-900 dark:focus:border-gray-900"
            placeholder="Enter email address"
          />
          <button
            type="button"
            className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5 mr-2 dark:bg-sky-400 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-sky-400 rounded-r-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default DeliveredToInbox;
