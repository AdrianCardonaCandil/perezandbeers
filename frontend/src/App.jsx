import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import routes from "./routes/routes";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";

/**
 * @file src/App.jsx
 * @description Holds the logic for the app routing system and defines the main layout of the web site.
 * @author Adrian Cardona Candil
 */

// Mock data for the header component
const menuLabel = "menu";
const location = "C. Obispo Codina, 6, 35001 Las Palmas de Gran Canaria";

/**
 * @function Layout
 * @description Application layout component. Defines the scaffold of the application placing header,
 * main content and footer.
 * @returns {JSX.Element} Layout component.
 */
const Layout = () => {
    /* Logic to show the navigation window */
    const [showNavigation, setShowNavigation] = useState(false);
    const handleNavigation = () => {
        setShowNavigation(!showNavigation);
    };
    return (
        <div className="min-h-screen bg-[var(--surface-light)] font-['Raleway'] text-sm text-[var(--on-surface-light)] md:text-base lg:text-lg dark:bg-[var(--surface-dark)] dark:text-[var(--on-surface-dark)]">
            <Header
                handleNavigation={handleNavigation}
                label={menuLabel}
                location={location}
            />
            <Navigation showNavigation={showNavigation} routes={routes} />
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </div>
    );
};

/**
 * @function App
 * @description Main component of the application. Sets up routing system and layout.
 * @returns {JSX.Element} App main component.
 */
const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};

export default App;
