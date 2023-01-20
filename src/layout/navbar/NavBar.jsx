import { Logo } from "../../reuseables/Logo";

import logoImg from "../../assets/Logomark.svg";
import { NavIcon } from "../../reuseables/Icon";

const NavBar = ({ visible, setVisible }) => {
  return (
    <div className="lg:hidden px-6 flex justify-between items-center">
      <Logo Logo={logoImg} />
      <button
        className={`${visible ? "hidden" : "inline-block"} sm:inline-block`}
        onClick={() => setVisible(!visible)}
      >
        <NavIcon />
      </button>
    </div>
  );
};

export default NavBar;
