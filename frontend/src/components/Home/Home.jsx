import { useEffect, useState } from "react";
import images from "../../assets/images/export.js";
import Front from "./Front";
import Menu from "./Menu";
import Catalog from "./Catalog.jsx";
import Events from "./Events.jsx";
import About from "./About.jsx";

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
  information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
        sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
        imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
  sectionButton: "Lorem ipsum dolor sit amet",
};

// Mock information for the Catalog component
const catalog = {
  sectionName: "Lorem ipsum",
  information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
            sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
            imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
  sectionButton: "Lorem ipsum dolor sit amet",
  categories: [
    {
      id: 0,
      name: "Lorem ipsum",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
              vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
              Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
      beers: [
        {
          name: "Ipsum",
          id: 1,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
                      vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
                      Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
          brand: "Lorem ipsum",
          alcoholContent: "Lorem ipsum",
          country: "Lorem ipsum",
        },
        {
          name: "Dolor",
          id: 2,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
                      vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
                      Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
          brand: "Lorem ipsum",
          alcoholContent: "Lorem ipsum",
          country: "Lorem ipsum",
        },
      ],
      image: images[0],
    },
    {
      id: 1,
      name: "Lorem ipsum",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
              vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
              Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
      beers: [
        {
          name: "Lorem",
          id: 3,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
                      vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
                      Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
          brand: "Lorem ipsum",
          alcoholContent: "Lorem ipsum",
          country: "Lorem ipsum",
        },
      ],
      image: images[1],
    },
  ],
};

// Mock information for the events section
const events = {
  sectionName: "Lorem ipsum",
  information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
        sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
        imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
  sectionButton: "Lorem ipsum dolor sit amet",
};

// Mock information for the about section
const about = {
  logo: "Perez & Beers",
  information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum nibh sit amet vehicula
  facilisis. Aliquam tempus eros maximus sapien ullamcorper, quis luctus ex volutpat. Vivamus ut porta lorem. Donec
  ultrices, eros ac aliquam scelerisque, libero lorem pretium ipsum, ac tristique mauris libero in turpis. Proin
  lectus sapien, elementum varius ante eu, condimentum iaculis felis. Fusce dignissim feugiat turpis, vel faucibus
  lacus. Nunc eget sollicitudin nibh, id euismod mi. Nam id nisi sit amet mi sagittis ultricies et in risus. Etiam
  pulvinar rutrum leo a aliquet. Donec tristique diam lacus, et vulputate orci tempus eget. Donec volutpat libero
  eget consectetur tempor.`,
  share: "Lorem ipsum dolor",
  timetable: {
    name: "Lorem ipsum",
    entries: [
      {
        day: "Monday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Tuesday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Wednesday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Thursday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Friday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Saturday",
        hours: "10:00 - 22:00",
      },
      {
        day: "Sunday",
        hours: "10:00 - 22:00",
      },
    ],
  },
};

/**
 * @function Hero
 * @description Hero image component. Image displayed trough the different main sections.
 * * @returns {JSX.Element} Hero component.
 */

const Hero = ({ isIntersecting }) => {
  return (
    <div
      className={`top-0 h-screen overflow-hidden ${isIntersecting ? "flex-3" : "flex-5"} transition-[flex] duration-1300 ease-in md:sticky`}
    >
      <img
        className="image-reveal h-full w-full object-cover"
        src={images[4].path}
      ></img>
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
    <div
      className={`z-250 min-w-0 ${isIntersecting ? "flex-5" : "flex-3"} transition-[flex] duration-1300 ease-in`}
    >
      <Front front={front} />
      <div id="expanded">
        <Menu menu={menu} />
        <Catalog catalog={catalog} />
        <Events events={events} />
        <About about={about} />
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
          const { top } = entry.boundingClientRect;
          if (entry.isIntersecting) setIsIntersecting(true);
          else {
            if (top > 0) setIsIntersecting(false);
          }
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
