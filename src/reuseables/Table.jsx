import { DownloadIcon } from "./Icon"
import Avatar from "../assets/Avatar.svg"
import { AvatarFive, AvatarFour, AvatarThree, AvatarTwo, AvatarOne } from "./Avatars"

const tableDetails = [
    {
        invoice: "Basic Plan - Dec 2022",
        date: "Dec 1, 2022",
        pic: <AvatarFive />,
    },
    {
        invoice: "Basic Plan - Nov 2022",
        date: "Nov 1, 2022",
        pic: <AvatarFour />,
    },
    {
        invoice: "Basic Plan - Oct 2022",
        date: "Oct 1, 2022",
        pic: <AvatarThree />,
    },
    {
        invoice: "Basic Plan - Sep 2022",
        date: "Sep 1, 2022",
        pic: <AvatarOne />,
    },
    {
        invoice: "Basic Plan - Aug 2022",
        date: "Aug 1, 2022",
        pic: <AvatarTwo />,
    },
    {
        invoice: "Basic Plan - Jul 2022",
        date: "Jul 1, 2022",
        pic: <AvatarTwo />,
    },
    {
        invoice: "Basic Plan - Jun 2022",
        date: "Jun 1, 2022",
        pic: <AvatarOne />,
    },
]

const Table = () => {
    return (
        <div className="max-w-7xl mx-auto mb-24">
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg btn-mode">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                />
                                                <label
                                                    htmlFor="checkbox-all"
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 mr-auto text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                                        >
                                            Invoice
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                                        >
                                            Users on plan
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">
                                                Download
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tableDetails.map((item) => (
                                        <tr className="hover:bg-gray-100">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-table-1"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                                    />
                                                    <label
                                                        htmlFor="checkbox-table-1"
                                                        className="sr-only"
                                                    >
                                                        checkbox
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 w-full text-sm font-medium text-gray-900 whitespace-nowrap">
                                                {item.invoice}
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">
                                                USD $10.00
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                {item.date}
                                            </td>
                                            <td className="w-4">
                                                <span className="px-1 py-1 flex items-center justify-center text-base rounded-full text-green-600  bg-green-200 ">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="2.5"
                                                        stroke="currentColor"
                                                        class="w-4 h-4 mr-2"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    <span className="text-sm">
                                                        Paid
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="py-2 px-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                {item.pic}
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                <DownloadIcon />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
