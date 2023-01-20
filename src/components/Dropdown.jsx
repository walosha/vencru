import React, { useState } from "react"

export function Dropdown({ details }) {

    const [mode, setMode] = useState(false)

    return (
        <div className="relative z-10 inline-block text-left sm:hidden">
            <div
                onClick={() => setMode(!mode)}
                onBlur={() => setMode(false)}
            >
                <button
                    type="button"
                    className="border border-gray-300 bg-white shadow-sm flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300"
                    id="options-menu"
                    on
                >
                    My details
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                </button>
            </div>
            <div className={`${mode ? 'block' : 'hidden'} absolute left-1 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5`}>
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    {details.map((item) => (
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            key={item.text}
                        >
                            <span className="flex flex-col">
                                <span>{item.text}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
