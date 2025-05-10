/**
 * @file Navigation.jsx
 * @description Contains a navigation bar for reaching different pages of the website.
 * @author Adrian Cardona Candil
 */

import { Link } from "react-router-dom";
import images from "../../assets/images/export";

/**
 * @function Navigation
 * @description Renders the navigation window.
 * @returns {JSX.Element} The navigation component.
 */

const Navigation = ({ showNavigation, routes }) => {
    return (
        <section
            className={`fixed top-0 z-400 grid h-full w-full grid-rows-2 bg-[var(--surface-light)] transition-all duration-600 md:grid-cols-[65vw_1fr] md:grid-rows-1 dark:bg-[var(--surface-dark)] ${showNavigation ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
            <div>
                <img
                    className="h-full w-full object-cover"
                    src={images[3].path}
                    alt={images[3].alt}
                />
            </div>
            <nav className="flex flex-col justify-center gap-10 pl-25 tracking-wider">
                {routes.map((route) => (
                    <>
                        <Link
                            key={route.id}
                            to={route.path}
                            className="mr-25 border-b-1 border-b-[var(--on-surface-light)] pb-1 font-thin transition duration-300 hover:scale-110 hover:border-b-[var(--primary-light)] hover:text-[var(--primary-light)] dark:border-b-[var(--on-surface-dark)] dark:hover:border-b-[var(--primary-dark)] dark:hover:text-[var(--primary-dark)]"
                        >
                            {route.name}
                        </Link>
                    </>
                ))}
            </nav>
        </section>
    );
};

export default Navigation;
