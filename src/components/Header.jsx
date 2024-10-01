import React from "react";
import logo from "../assets/IAS.png";

export default function Header() {
    return(
        <header class="">
  <div class="relative flex max-w-screen-2xl flex-col overflow-hidden  py-2 px-4 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <img src={logo} alt="Logo" className="w-60"/>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 font-semibold" >
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="#">Home</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="#aboutus">About Us</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="#contact">Join Us</a></li>
        {/* <li class="text-gray-600 md:mr-12 hover:text-blue-600">
          <button class="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">Login</button>
        </li> */}
      </ul>
    </nav>
  </div>
</header>

    )
}