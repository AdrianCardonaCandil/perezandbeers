import Front from "./Front";
import images from "../../assets/images/export";
import { useEffect } from "react";
import { useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 },
    );
    const target = document.getElementById("test-section");
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <main>
      <section>
        <div
          className={`unexpanded-home-grid flex flex-col-reverse md:grid ${isVisible ? "expanded-home-grid" : ""}`}
        >
          <div>
            <Front
              logo={front.logo}
              message={front.message}
              label={front.label}
            />
            <section id="test-section" className="h-250"></section>
          </div>
          <div className="top-0 right-0 w-full overflow-hidden md:sticky md:h-screen">
            <img
              className="reveal-hero-image h-full w-full object-cover"
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
