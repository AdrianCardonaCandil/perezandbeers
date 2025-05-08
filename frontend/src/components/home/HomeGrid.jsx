/**
 * @file HomeGrid.jsx
 * @description Contains a grid layout formed by the hero image and the main sections of the home page.
 * @author Adrian Cardona Candil
 */

import Front from "./Front";
import { useEffect, useState } from "react";
import images from "../../assets/images/export";
import Menu from "./Menu";
import Catalog from "./Catalog";

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
          name: "Lorem ipsum",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo non nunc
                    vestibulum sodales vitae nec erat. Suspendisse potenti. Nunc quis ligula a massa lobortis ultricies.
                    Mauris imperdiet quam malesuada nibh euismod, quis bibendum magna laoreet`,
          brand: "Lorem ipsum",
          alcoholContent: "Lorem ipsum",
          country: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
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
          name: "Lorem ipsum",
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

/**
 * @function HomeGrid
 * @description HomeGrid component. Renders the grid layout of the home page.
 * @returns {JSX.Element} The home grid component.
 */

const HomeGrid = () => {
  // Logic to handle the expanded state of the grid
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setExpanded(true);
          } else {
            setExpanded(false);
          }
        });
      },
      { threshold: 0.1 },
    );
    const target = document.getElementById("main-sections");
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
    <section
      className={`unexpanded-home-grid flex flex-col-reverse md:grid ${expanded ? "expanded-home-grid" : ""}`}
    >
      <div>
        <Front logo={front.logo} message={front.message} label={front.label} />
        <div id="main-sections">
          <Menu
            sectionName={menu.sectionName}
            information={menu.information}
            sectionButton={menu.sectionButton}
          />
          <Catalog
            sectionName={catalog.sectionName}
            information={catalog.information}
            categories={catalog.categories}
            sectionButton={catalog.sectionButton}
          />
        </div>
      </div>
      <div className="top-0 right-0 w-full overflow-hidden md:sticky md:h-screen">
        <img
          className={`reveal-hero-image h-full w-full object-cover transition duration-1300 ${expanded ? "scale-100" : "scale-120"}`}
          src={images[3].path}
          alt={images[3].alt}
        />
      </div>
    </section>
  );
};

export default HomeGrid;
