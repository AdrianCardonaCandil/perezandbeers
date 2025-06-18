import { useEffect, useState } from "react";
import image from "../../assets/image.jpg";
import Front from "./Front";
import Menu from "./Menu";

/**
 * @file Home.jsx
 * @description Home component. Landing page for the website.
 * @author Adrian Cardona Candil
 */

// Mock information for the Front component
const front = {
  logo: "Perez & Beers",
  mission:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum viverra odio eget egestas.",
  label: "Reserve your table",
};

// Mock information for the Menu component
const menu = {
    sectionName: "Lorem ipsum",
    information: {
        title: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
          sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
          imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
    },
    sectionButton: "Lorem ipsum dolor sit amet",
};

/**
 * @function Hero
 * @description Hero image component. Image displayed trough the different main sections.
 * * @returns {JSX.Element} Hero component.
 */

const Hero = ({ isIntersecting }) => {
  return (
    <div className={`top-0 h-screen ${isIntersecting ? "flex-2" : "flex-4"} transition-[flex] duration-1300 ease-in md:sticky`}>
      <img className="h-full w-full object-cover" src={image}></img>
    </div>
  );
};

/**
 * @function MainSections
 * @description Main sections component. Displays the main content of the landing page.
 * @returns {JSX.Element} MainSections component.
 */

const MainSections = ({ isIntersecting }) => {
  return (
    <div className={`z-250 min-w-0 ${isIntersecting ? "flex-4" : "flex-2"} transition-[flex] duration-1300 ease-in`}>
      <Front front={front} />
      <div id="expanded">
        <Menu sectionName={menu.sectionName} information={menu.information} sectionButton={menu.sectionButton} />
      </div>
    </div>
  );
};

/**
 * @function Home
 * @description Home component. Displays main content of the landing page through several sections.
 * @returns {JSX.Element} Home component.
 */

const Home = () => {
  const isIntersecting = useIntersectionObserver("expanded");
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row">
        <MainSections isIntersecting={isIntersecting} />
        <Hero isIntersecting={isIntersecting} />
      </div>
    </main>
  );
};

/**
 * @function useIntersectionExpand
 * @description Custom hook that uses the Intersection Observer API to detect when an element is in the viewport.
 * @returns {boolean} - Returns true if the target element is in the viewport, false otherwise.
 */

const useIntersectionObserver = (targetId, threshold = 0.01) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsIntersecting(true);
          else setIsIntersecting(false);
        });
      },
      { threshold: threshold },
    );
    const target = document.getElementById(targetId);
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);
  return isIntersecting;
};

export default Home;
