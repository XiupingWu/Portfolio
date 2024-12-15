"use client"

import { useState } from "react"

interface props {
  title: string,
  children: React.ReactNode
}

export default function Accordion({title, children}: props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div>
      <h2 id="accordion-collapse-heading-1">
        <button 
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
        >
          <span>{title}</span>
          <svg 
            className={`
              w-3 h-3 shrink-0
              ${isExpanded? 'rotate-180 ' : ''}
            `}
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 10 6"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div>
        <div 
          className={`
            p-5 border border-gray-200 dark:border-gray-700 bg-transparent
            transform transition-transform duration-300 ease-in-out origin-top 
            ${isExpanded ? "scale-y-100 h-auto" : "scale-y-0 max-h-0"}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  )
}