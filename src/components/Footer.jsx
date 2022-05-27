import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="flex md:justify-start md:flex-nowrap md:w-full w-auto bg-white p-4 justify-center flex-wrap">
        <div className="p-2 text-gray-600">
          <h3 className="mb-6 text-black">Follow us on</h3>
          <div className="md:flex md:flex-row">
            <a
              href="/"
              className="hover:text-sky-400 cursor-pointer mb-2 text-4xl"
            >
              <BsFacebook />
            </a>
            <a
              href="/"
              className="hover:text-sky-400 cursor-pointer mb-2 text-4xl"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="/"
              className="hover:text-sky-400 cursor-pointer mb-2 text-4xl"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="/"
              className="hover:text-sky-400 cursor-pointer mb-2 text-4xl"
            >
              <IoLogoYoutube />
            </a>
          </div>
          <p className="mb-2">Get app exclusive deals</p>
          <button className="bg-sky-400 hover:bg-sky-300 text-gray-800 font-bold px-2 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download our App</span>
          </button>
        </div>
        <div className="p-2 pl-14 text-gray-600">
          <h3 className="mb-6 text-black">GrabOne</h3>
          <div className="flex flex-col">
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Contact Us
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              About Us
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Terms & Returns
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Terms & Returns
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Gift Cards
            </a>
          </div>
        </div>
        <div className="mb:p-2 mb:pl-20 p-0 pl-0 text-gray-600">
          <h3 className="mb-6 text-black">My Account</h3>
          <div className="flex flex-col">
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              My Account
            </a>
            <a
              href="/"
              className="hover:text-sky-400 cursor-pointer mb-2 ml-0 "
            >
              My Cart
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              My Coupons
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              FAQ
            </a>
          </div>
        </div>
        <div className="p-2 pl-20 text-gray-600">
          <h3 className="mb-6 text-black">Merchants</h3>
          <div className="flex flex-col">
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Run a Deal
            </a>
            <a href="/" className="hover:text-sky-400 cursor-pointer mb-2">
              Merchant Centre
            </a>
          </div>
        </div>
        <div className="p-2 pl-20 text-gray-600">
          <h3 className="mb-6 text-black">Newsletter Signup</h3>
          <div className="flex flex-col">
            <p className="hover:text-sky-400 cursor-pointer">
              Sign up for our daily emails and we'll send you all the best
              deals,
              <br /> tailored for you.
            </p>
            <form
              action="https://www.getrevue.co/profile/flowbite/add_subscriber"
              method="post"
              id="revue-form"
              name="revue-form"
            >
              <div className="flex items-end mb-3 mt-6">
                <div className="relative mr-3 w-full revue-form-group">
                  <label
                    htmlFor="member_email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="revue-form-field bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your email address..."
                  />
                </div>
                <div className="revue-form-actions">
                  <input
                    type="submit"
                    value="Subscribe"
                    className="cursor-pointer text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-600 dark:focus:ring-sky-400"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
