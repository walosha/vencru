import { Logo } from "../../reuseables/Logo";
import { Input } from "../../reuseables/Input";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

import {
  ChartIcon,
  ExitIcon,
  FlagIcon,
  HomeIcon,
  LayerIcon,
  SettingsIcon,
  SupportIcon,
  TaskIcon,
  UserIcon,
} from "../../reuseables/Icon";

import logoImg from "../../assets/Logomark.svg";
import imgWrap from "../../assets/ImageWrap.svg";
import avatar from "../../assets/Avatar1.svg";

const navList = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Dashboard",
    icon: <ChartIcon />,
    badge: true,
  },
  {
    name: "Projects",
    icon: <LayerIcon />,
  },
  {
    name: "Tasks",
    icon: <TaskIcon />,
  },
  {
    name: "Reporting",
    icon: <FlagIcon />,
  },
  {
    name: "Users",
    icon: <UserIcon />,
  },
];
const SideBar = ({ visible, setVisible }) => {
  return (
    <div
      className={`px-4 py-2 z-20 h-full bg-slate-50 ${
        visible ? "absolute" : "hidden"
      } top-0 left-0 lg:block lg:relative`}
    >
      <div className="flex justify-between items-center">
        <Logo Logo={logoImg} />
        <button className="border-2 bg-slate-100 rounded-md">
          <XMarkIcon
            className="text-slate-700 h-7 w-7 sm:hidden"
            onClick={() => setVisible(!visible)}
          />
        </button>
      </div>
      <Input Icon={MagnifyingGlassIcon} type="text" placeholder="Search" />
      <div className="mt-4 mb-7">
        {navList.map((item) => (
          <button
            key={item.name}
            className="flex items-center mb-1.5 py-2 pl-0.5 w-full rounded-md hover:bg-slate-100"
          >
            <div className="mr-3 text-gray-900">{item.icon}</div>
            <span className="text-md text-gray-700 mr-auto">{item.name}</span>
            {item.badge && (
              <span className="bg-slate-200 px-2.5 py-0.5 rounded-full">
                10
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="mb-12 text-gray-700">
        <div className="mb-4">
          <button className="flex w-full items-center mb-2 py-2 pl-0.5 hover:bg-slate-100">
            <div className="mr-3">
              <SupportIcon />
            </div>
            <span className="text-md">Support</span>
          </button>
          <button className="flex w-full items-center mb-2 py-2 pl-0.5 hover:bg-slate-100">
            <div className="mr-3">
              <SettingsIcon />
            </div>
            <span className="text-md">Settings</span>
          </button>
        </div>
        <div className="bg-slate-100 rounded-xl px-6 py-6 mb-10 max-w-xs">
          <h3 className="font-semibold text-xl text-black mb-0.5">
            New features available!
          </h3>
          <p className="text-base sm:text-lg py-1 mb-3">
            Check out the new dashboard view. Pages now load faster.{" "}
          </p>
          <img src={imgWrap} alt="video_placeholder" className="w-full mb-4" />
          <div>
            <button className="mr-5">Dismiss</button>
            <button className="text-violet-800">What's new?</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-4 border-t-2">
        <img src={avatar} alt="avatar" className="h-12 w-12 sm:h-16 sm:w-16" />
        <div>
          <h3>Olivia Rhye</h3>
          <p className="text-gray-600">olivia@untitledui.com</p>
        </div>
        <button>
          <ExitIcon />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
