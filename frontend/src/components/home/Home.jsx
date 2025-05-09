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

// Mock information for the About section
const about = {
    logo: "Lorem ipsum",
    information: {
        title: "Lorem ipsum",
        text: `Integer dictum vel tellus ac congue. Aliquam iaculis ex bibendum lacinia malesuada. Nulla rutrum,
        eros at ornare condimentum, nisi massa accumsan nisl, ac suscipit mauris turpis eget nulla. Fusce efficitur,
        felis nec fringilla consectetur, metus erat malesuada velit, sed finibus massa eros sodales odio. In semper
        mauris nec neque congue, sed suscipit tellus volutpat. Nam sodales nisi a turpis vestibulum, eu rutrum odio
        mattis. Phasellus tortor turpis, auctor condimentum cursus sed, congue eget magna. Morbi eget nunc fringilla
        magna rhoncus hendrerit ac vel orci. Phasellus fringilla, felis ut rhoncus vehicula, risus urna varius lectus,
        quis mattis lacus est nec lacus. Integer dictum nunc quis nunc facilisis congue at ut purus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.`,
    },
    sectionName: "Lorem ipsum",
    timetable: [
        {
            days: "Lorem - Ipsum",
            hours: "10:00 - 22:00",
        },
        {
            days: "Lorem - Ipsum",
            hours: "10:00 - 22:00",
        },
        {
            days: "Lorem - Ipsum",
            hours: "10:00 - 22:00",
        }
    ]
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
        if (target) observer.observe(target);
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
                    <Sections menu={menu} catalog={catalog} events={events} about={about} />
                </div>
                <Hero expanded={expanded} />
            </section>
        </main>
    );
};

export default Home;
