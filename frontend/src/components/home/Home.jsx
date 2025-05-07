import Front from "./Front";
import images from "../../assets/images/export";

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
      <section>
<<<<<<< HEAD
        <div className="column-template-resize header-margin flex grid-cols-[500px_1fr] flex-col-reverse md:grid">
=======
        <div className="column-template-resize flex grid-cols-[500px_1fr] flex-col-reverse md:grid">
>>>>>>> main
          <div>
            <Front
              logo={front.logo}
              message={front.message}
              label={front.label}
            />
            <section className="h-1000"></section>
          </div>
          <div className="top-0 right-0 w-full overflow-hidden md:sticky md:h-screen">
            <img
              className="scale-image h-full w-full object-cover"
              src={images[3].path}
              alt={images[3].alt}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
