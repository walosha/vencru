import React from "react"
export function PayMethodCard({ visa, radioBox, mastercard, radioUnchecked }) {
    return (
        <div className="mb-16 md:flex md:justify-between">
            <div className="mb-6 md:min-w-max md:mr-20">
                <h2 className="text-md">Card details</h2>
                <p className="text-md text-gray-500 mb-4">
                    Select default payment method.
                </p>
            </div>
            <div className="md:w-full">
                <div className="border border-indigo-300 bg-violet-100 rounded-xl flex py-5 px-2 mb-8 items-start">
                    <img src={visa} alt="payment method" className="mr-4" />
                    <div className="mr-auto ">
                        <h4 className="text-violet-800 font-medium">
                            Visa ending in 1234
                        </h4>
                        <p className="text-violet-500 mb-2">Expiry 06/2024</p>
                        <div>
                            <button className="mr-6 text-violet-500">
                                Set as default
                            </button>
                            <button className="text-violet-800 font-medium">
                                Edit
                            </button>
                        </div>
                    </div>
                    <img src={radioBox} alt="radio-check" />
                </div>
                <div className="border border-gray-300 rounded-xl flex py-6 px-3 mb-2 items-start">
                    <img
                        src={mastercard}
                        alt="payment method"
                        className="mr-4"
                    />
                    <div className="mr-auto ">
                        <h4 className="text-gray-800 font-medium">
                            Mastercard ending in 1234
                        </h4>
                        <p className="text-gray-500 mb-2">Expiry 06/2024</p>
                        <div>
                            <button className="mr-6 text-gray-600">
                                Set as default
                            </button>
                            <button className="text-gray-800 font-medium">
                                Edit
                            </button>
                        </div>
                    </div>
                    <img src={radioUnchecked} alt="radio-check" />
                </div>
            <p className="text-gray-500 text-md">+ Add new payment method</p>
            </div>
        </div>
    )
}
