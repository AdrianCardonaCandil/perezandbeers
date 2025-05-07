/**
 * @file Home.jsx
 * @description Defines the home page of the web site.
 * @author Adrian Cardona Candil
 */

import Front from "./Front";

/**
 * @function Home
 * @description Home page component. Renders all the components that form the home page.
 * @returns {JSX.Element} The home page component.
 */

// Mock information for the Front component
const front = {
  logo: "Perez & Beers",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum viverra odio eget egestas.",
  label: "Reserve your table",
};

const Home = () => {
  return (
    <main>
      <section>
        <Front logo={front.logo} message={front.message} label={front.label} />
      </section>
    </main>
  );
};

export default Home;
