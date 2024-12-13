"use client"
import navlinks from "@/data/navlinks";
import { useState } from "react";

function Navbar() {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button 
          onClick={() => setIsExpand(isExpand => !isExpand)}
          aria-controls="navbar-default" 
          aria-expanded="false"
          className="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"          data-collapse-toggle="navbar-default" 
          type="button" 
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div 
          className={`w-full md:block md:w-full overflow-hidden transition-all duration-700 ease-in-out ${
            isExpand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100`}
        >
          <ul className=" justify-end font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white dark:bg-black">
            {
              navlinks.map((link, index) => (
                <li
                  key={index}
                >
                  <a 
                    className="mt-1 block py-2 px-3 text-gray-900 border-b-2 border-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href={link.href}
                  >
                      {link.label}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;