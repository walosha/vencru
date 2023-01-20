import React from "react"

export function SettingsNav({ details }) {
    return (
        <div className="hidden sm:flex items-center overflow-auto btn-mode">
            {details.map((item) => (
                <button
                    type="button"
                    className="w-full px-4 py-1 text-base font-medium text-black bg-white border hover:bg-gray-100"
                >
                    {item.text}
                </button>
            ))}
        </div>
    )
}
