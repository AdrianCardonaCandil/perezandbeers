import Front from "./Front";
import images from "../../assets/images/export";
import { useEffect } from "react";
import { useState } from "react";
import HomeGrid from "./HomeGrid";

/**
 * @file Home.jsx
 * @description Defines the home page of the web site.
 * @author Adrian Cardona Candil
 */

/**
 * @function Home
 * @description Home page component. Renders all the components that form the home page.
 * @returns {JSX.Element} The home page component.
 */

const Home = () => {
  return (
    <main>
      <HomeGrid />
    </main>
  );
};

export default Home;
