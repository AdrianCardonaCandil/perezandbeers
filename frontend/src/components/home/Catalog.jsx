/**
 * @file Catalog.jsx
 * @description Main home section containing information about offered beers, recommendations, etc.
 * @author Adrian Cardona Candil
 */

import SectionHeader from "./SectionHeader";
import { useState } from "react";
import divider from "../../assets/divider.svg";

/**
 * @function Beer
 * @description Renders a beer card with its name, description, brand, alcohol content, and country of origin.
 * @returns {JSX.Element} The beer card component.
 */

const Beer = ({ name, description, brand, alcoholContent, country }) => {
    return (
        <article className="flex flex-col gap-5">
            <h3
                style={{ fontFamily: "'Dancing Script'" }}
                className="catalog-fade-in text-2xl font-bold"
            >
                {name}
            </h3>
            <p className="catalog-fade-in leading-8 font-light">
                {description}
            </p>
            <div className="flex justify-between font-thin">
                <p className="catalog-fade-in">{brand}</p>
                <div className="catalog-fade-in flex items-center gap-5 text-xs">
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
        <div className="flex flex-col gap-10 px-10 md:px-15">
            <nav className="flex justify-evenly border-b-1 border-[var(--primary-light)] pb-2 dark:border-[var(--primary-dark)]">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className="text-xs font-thin transition duration-300 hover:scale-110 hover:text-[var(--primary-light)] md:text-sm dark:hover:text-[var(--primary-dark)]"
                    >
                        {category.name}
                    </button>
                ))}
            </nav>
            <div>
                <p className="catalog-fade-in leading-8 font-light">
                    {categories[selectedCategory].description}
                </p>
            </div>
            <div className="my-10 h-50 md:h-75">
                <img
                    className="h-full w-full object-cover"
                    src={categories[selectedCategory].image.path}
                    alt={categories[selectedCategory].image.alt}
                />
            </div>
            <div className="flex flex-col gap-10">
                {categories[selectedCategory].beers.map((beer) => (
                    <div key={beer.name} className="flex flex-col gap-10">
                        <Beer
                            name={beer.name}
                            description={beer.description}
                            brand={beer.brand}
                            alcoholContent={beer.alcoholContent}
                            country={beer.country}
                        />
                        <img src={divider}></img>
                    </div>
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

const Catalog = ({ sectionName, information, categories, sectionButton }) => {
    return (
        <section className="mt-15 flex min-h-screen flex-col justify-between">
            <SectionHeader
                sectionName={sectionName}
                information={information}
            />
            <Recommendations categories={categories} />
            <div className="mt-20 grid place-content-center bg-[var(--surface-container-light)] py-12.5 text-[var(--on-tertiary-container-light)] underline underline-offset-5 transition-all duration-1000 hover:bg-[var(--tertiary-container-light)] md:py-17.5 dark:bg-[var(--surface-container-dark)] dark:text-[var(--on-tertiary-container-dark)] hover:dark:bg-[var(--tertiary-container-dark)]">
                <button>{sectionButton}</button>
            </div>
        </section>
    );
};

export default Catalog;
