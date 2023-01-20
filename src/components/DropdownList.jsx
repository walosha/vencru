import React from "react"
export function DropdownList({ details }) {
    return (
        <div className="hidden sm:flex items-center overflow-auto btn-mode">
            {details.map((item) => (
                <button
                    key={item.text}
                    type="button"
                    className="w-full px-4 py-1 text-base font-medium text-black bg-white border hover:bg-gray-100"
                >
                    {item.text}
                </button>
            ))}
        </div>
    )
}
