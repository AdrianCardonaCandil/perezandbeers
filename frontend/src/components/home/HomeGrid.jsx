/**
 * @file HomeGrid.jsx
 * @description Contains a grid layout formed by the hero image and the main sections of the home page.
 * @author Adrian Cardona Candil
 */

import Front from "./Front"
import { useEffect, useState } from "react";
import images from "../../assets/images/export";

// Mock information for the Front component
const front = {
    logo: "Perez & Beers",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum viverra odio eget egestas.",
    label: "Reserve your table",
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
            { threshold: 0.1 }
        )
        const target = document.getElementById("main-sections");
        if (target) {
            observer.observe(target);
        }
        return () => {
            if (target) {
                observer.unobserve(target);
            }
        }
    }, [])
    return (
        <section className={`unexpanded-home-grid flex flex-col-reverse md:grid ${expanded ? "expanded-home-grid" : ""}`}>
            <div>
                <Front logo={front.logo} message={front.message} label={front.label}  />
                <div id="main-sections">
                    
                </div>
            </div>
            <div className="top-0 right-0 w-full overflow-hidden md:sticky md:h-screen">
                <img className="reveal-hero-image h-full w-full object-cover" src={images[3].path} alt={images[3].alt} />
            </div>
        </section>
    )
}

export default HomeGrid;