import Front from "./Front";
import images from "../../assets/images/export";
import { useEffect } from "react";
import { useState } from "react";
import Sections from "./Sections";

/**
 * @file Home.jsx
 * @description Defines the home page of the web site.
 * @author Adrian Cardona Candil
 */

// Mock information for the Front component
const front = {
    logo: "Perez & Beers",
    message:
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

// Mock information for the Catalog component
const catalog = {
    sectionName: "Lorem ipsum",
    information: {
        title: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
              sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
              imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
    },
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
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
                      vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
                      Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
                    brand: "Lorem ipsum",
                    alcoholContent: "Lorem ipsum",
                    country: "Lorem ipsum",
                },
                {
                    name: "Dolor",
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
    information: {
        title: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc vestibulum
          sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies. Mauris
          imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
    },
    sectionButton: "Lorem ipsum dolor sit amet",
};

/**
 * @function useIntersectionExpand
 * @description Custom hook that uses the Intersection Observer API to detect when an element is in the viewport.
 * @returns {boolean} - Returns true if the target element is in the viewport, false otherwise.
 */

const useIntersectionExpand = (targetId, threshold = 0.01) => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const { top } = entry.boundingClientRect;
                    if (entry.isIntersecting) {
                        setExpanded(true);
                    } else {
                        if (top > 0) {
                            setExpanded(false);
                        }
                    }
                });
            },
            { threshold: threshold },
        );
        const target = document.getElementById(targetId);
        if (target) {
            console.log("Target found");
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);
    return expanded;
};

/**
 * @function Hero
 * @description Renders the hero image of the home page.
 * @returns {JSX.Element} The hero image component.
 */

const Hero = ({ expanded }) => {
    return (
        <div className="top-0 right-0 w-full overflow-hidden md:sticky md:h-screen">
            <img
                className={`reveal-hero-image h-full w-full object-cover transition duration-1300 ${expanded ? "scale-100" : "scale-120"}`}
                src={images[3].path}
                alt={images[3].alt}
            />
        </div>
    );
};

/**
 * @function Home
 * @description Home page component. Renders all the components that form the home page.
 * @returns {JSX.Element} The home page component.
 */

const Home = () => {
    const expanded = useIntersectionExpand("main-sections");
    return (
        <main>
            <section
                className={`unexpanded-home-grid flex flex-col-reverse md:grid ${expanded ? "expanded-home-grid" : ""}`}
            >
                <div className="min-w-0">
                    <Front
                        logo={front.logo}
                        message={front.message}
                        label={front.label}
                    />
                    <Sections menu={menu} catalog={catalog} events={events} />
                    <div className="h-300 sticky top-0 z-10 bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] w-screen"></div>
                </div>
                <Hero expanded={expanded} />
            </section>
        </main>
    );
};

export default Home;
