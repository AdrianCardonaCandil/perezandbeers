import SectionFooter from "./SectionFooter";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

/**
 * @file Catalog.jsx
 * @description Main home section containing information about offered beers, recommendations, etc.
 * @author Adrian Cardona Candil
 */

/**
 * @function Beer
 * @description Renders a beer card with its name, description, brand, alcohol content, and country of origin.
 * @returns {JSX.Element} The beer card component.
 */

const Beer = ({ name, description, brand, alcoholContent, country }) => {
  return (
    <article className="fade-motion-in flex flex-col gap-5 px-5 py-12.5 transition duration-300 hover:bg-[var(--surface-container-light)] md:px-10 dark:hover:bg-[var(--surface-container-dark)]">
      <h3 className="font-bold text-[var(--secondary-light)] dark:text-[var(--secondary-dark)]">
        {name}
      </h3>
      <p>{description}</p>
      <div className="flex justify-between text-sm font-thin">
        <p>{brand}</p>
        <div className="flex items-center gap-5 text-sm font-thin">
          <p>{alcoholContent}</p>|<p>{country}</p>
        </div>
      </div>
    </article>
  );
};

/**
 * @function Recommendations
 * @description Renders a navigation bar with different recommended categories and a description for each category.
 * Also renders a list of beers for each category.
 * @returns {JSX.Element} The recommendations component.
 */

const Recommendations = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleCategoryChange = (index) => {
    setSelectedCategory(index);
  };
  return (
    <div className="flex flex-col gap-10 px-7.5 md:px-12.5">
      <nav className="flex justify-evenly border-b-1 border-[var(--secondary-light)] pb-2 dark:border-[var(--secondary-dark)]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            <p className="transition duration-150 hover:scale-105 hover:font-bold hover:text-[var(--secondary-light)] dark:hover:text-[var(--secondary-dark)]">
              {category.name}
            </p>
          </button>
        ))}
      </nav>
      <div className="fade-motion-in">
        <p>{categories[selectedCategory].description}</p>
      </div>
      <div className="my-10 h-50 md:h-75">
        <img
          className="h-full w-full object-cover"
          src={categories[selectedCategory].image.path}
          alt={categories[selectedCategory].image.alt}
        />
      </div>
      <div className="flex flex-col">
        {categories[selectedCategory].beers.map((beer) => (
          <Beer
            key={beer.id}
            name={beer.name}
            description={beer.description}
            brand={beer.brand}
            alcoholContent={beer.alcoholContent}
            country={beer.country}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * @function Catalog
 * @description Catalog component. Renders the catalog section of the home page.
 * @returns {JSX.Element} The catalog component.
 */

const Catalog = ({ catalog }) => {
  return (
    <section className="my-25 flex flex-col justify-between gap-20">
      <SectionHeader
        sectionName={catalog.sectionName}
        information={catalog.information}
      />
      <Recommendations categories={catalog.categories} />
      <SectionFooter sectionButton={catalog.sectionButton} />
    </section>
  );
};

export default Catalog;
