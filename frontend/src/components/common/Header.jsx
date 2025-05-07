import { HiBars2 } from "react-icons/hi2";

/**
 * @file src/components/common/Header.jsx
 * @description Defined the header component for the web site.
 * @author Adrian Cardona Candil
 */

/**
 * @function Header
 * @description Header component displayed on right side of the site.
 * @returns {JSX.Element} Header component.
 */

const Header = ({ label, location }) => {
  return (
    <header className="fixed top-0 right-0 flex flex-col items-center justify-around gap-2.5 p-5 md:h-full md:p-7.5">
      <div className="flex flex-col items-center">
        <label className="text-xs font-light" htmlFor="menu-button">
          {label}
        </label>
        <button name="menu-button">
          <HiBars2 className="size-10" />
        </button>
      </div>
      <p className="hidden font-thin tracking-widest whitespace-nowrap [writing-mode:vertical-lr] md:block">
        {location}
      </p>
    </header>
  );
};

export default Header;
