import { HiBars2 } from "react-icons/hi2";

/**
 * @file Header.jsx
 * @description Header component definition. Used to display a navegation window countaining relevant links in the website.
 * @author Adrian Cardona Candil
 */

/**
 * @function Header
 * @description Header component. Displays the manu icon that toggles the navigation window.
 * @returns {JSX.Element} Header component.
 */

const Header = ({ header }) => {
    return (
        <header>
            <div className="fixed top-0 right-0 h-full p-7.5">
                <div className="flex flex-col items-center text-xs">
                    <label htmlFor="menu-toggle">
                        {header.label}
                    </label>
                    <button name="menu-toggle">
                        <HiBars2 className="size-10" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;