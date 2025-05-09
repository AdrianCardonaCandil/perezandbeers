/**
 * @file Navigation.jsx
 * @description Contains a navigation bar for reaching different pages of the website.
 * @author Adrian Cardona Candil
 */

import { Link } from "react-router-dom"
import images from "../../assets/images/export"
import routes from "../../routes/routes"

/**
 * @function Navigation
 * @description Renders the navigation window.
 * @returns {JSX.Element} The navigation component.
 */

const Navigation = () => {
    return (
        <section className="grid grid-rows-2 w-full h-full fixed top-0 z-999] md:grid-cols-[65vw_1fr] md:grid-rows-1">
            <div>
                <img className="h-full w-full object-cover" src={images[3].path} alt={images[3].alt} />
            </div>
            <nav className="flex flex-col gap-10 justify-center pl-25 tracking-wider">
                {routes.map((route) => (
                    <>
                        <Link
                            key={route.id}
                            to={route.path}
                            className="mr-25 border-b-1 border-b-[var(--on-surface-light)] dark:border-b-[var(--on-surface-dark)] pb-1 font-thin transition duration-300 hover:scale-110 hover:text-[var(--primary-light)] dark:hover:text-[var(--primary-dark)] hover:border-b-[var(--primary-light)] dark:hover:border-b-[var(--primary-dark)]"
                    >
                            {route.name}
                        </Link>
                    </>
                ))}
            </nav>
        </section>
    )
}

export default Navigation