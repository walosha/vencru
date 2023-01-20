import { DropdownList } from "./../components/DropdownList"
import { PayMethodCard } from "./../components/PayMethodCard"
import { PayMethodMail } from "./../components/PayMethodMail"
import { Input } from "../components/Input"
import { Dropdown } from "./../components/Dropdown"
import { EnvelopeIcon } from "@heroicons/react/20/solid"
import "./Settings.css"

import mastercard from "../assets/mastercard.svg"
import visa from "../assets/visa.svg"
import radioBox from "../assets/radio-box.svg"
import radioUnchecked from "../assets/radio-unchecked.svg"
import { DownloadIcon } from "../components/Icon"
import Table from "../components/Table"

const details = [
    { text: "Details" },
    { text: "Profile" },
    { text: "Password" },
    { text: "Team" },
    { text: "Plan" },
    { text: "Billing" },
    { text: "Notifications" },
    { text: "Integrations" },
    { text: "API" },
]

const Settings = ({ setVisible }) => {
    return (
        <div className="px-4 flex-1 overflow-hidden bg-neutral-100" onClick={() => setVisible(false)}>
            <div className="mt-6">
                <h2 className="text-2xl mb-1">Settings</h2>
                <p className="text-lg text-gray-500 mb-4">
                    Manage your team and preferences here.
                </p>
            </div>
            <Dropdown details={details} />
            <DropdownList details={details} />
            <PayMethodMail EnvelopeIcon={EnvelopeIcon} />
            <PayMethodCard
                visa={visa}
                radioBox={radioBox}
                mastercard={mastercard}
                radioUnchecked={radioUnchecked}
            />
            <div>
                <div className="mb-6 md:flex items-center justify-between">
                    <h3 className="text-xl mb-3">Billing History</h3>
                    <button className="bg-white flex items-center border-2 px-5 py-2 rounded-lg shadow-sm">
                        <DownloadIcon />
                        <span className="ml-3">Download all</span>
                    </button>
                </div>
                <Table />
            </div>
        </div>
    )
}

export default Settings
