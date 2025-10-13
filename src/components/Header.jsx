import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IAS.png";

export default function Header() {
  return (
    <header>
      <div className="relative flex max-w-screen-2xl flex-col overflow-hidden py-2 px-3 md:mx-auto md:flex-row md:items-center">
        <Link to="/" className="flex items-center whitespace-nowrap text-2xl font-black">
          <img src={logo} alt="Logo" className="w-60" />
        </Link>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-8 md:ml-auto md:flex-row md:space-y-0 font-semibold">
            <li className="text-gray-600 md:mr-12 hover:text-green-600 text-right">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-green-600 text-right">
              <Link to="/magazine-countdown">Magazine</Link>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-green-600">
              <a href="#aboutus">About Us</a>
            </li>
            <li className="text-gray-600 md:mr-12 hover:text-green-600">
              <a href="#contact">Join Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
