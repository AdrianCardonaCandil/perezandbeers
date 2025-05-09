import Home from "../components/home/Home";
import Navigation from "../components/navigation/Navigation";

/**
 * @file routes.jsx
 * @description Defines the routes of the application.
 * @author Adrian Cardona Candil
 */

const routes = [
    {
        name: "Home",
        path: "/",
        element: <Navigation />,
    },
];

export default routes;
