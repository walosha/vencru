import React from "react"
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export function Input({Icon, type, placeholder}) {
    return (
        <div className="relative my-1 max-w-lg mx-auto z-auto">
            <input
                type={type}
                name="search"
                id="search"
                placeholder={placeholder}
                className="border border-slate-300 outline-blue-500 w-full rounded-lg pl-10 pr-2 py-2 shadow-sm"
            />
            <Icon className="w-5 absolute top-2.5 left-2 text-gray-400" />
        </div>
    )
}
