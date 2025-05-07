import Front from "./Front";
import images from "../../assets/images/export"

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
      <section className="md:grid grid-cols-[500px_1fr] column-template-resize">
        <div>
            <Front logo={front.logo} message={front.message} label={front.label} />
            <div className="h-1000"></div>
        </div>
        <div className="sticky top-0 right-0 h-screen w-full overflow-hidden scale-image">
            <img className="h-full w-full object-cover" src={images[3].path} alt={images[3].alt} />
        </div>
      </section>
    </main>
  );
};

export default Home;
