import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";

/**
 * @file routes.jsx
 * @description Defines the routes of the application.
 * @author Adrian Cardona Candil
 */

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
];

export default routes;
