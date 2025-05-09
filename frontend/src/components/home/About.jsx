/**
 * @file About.jsx
 * @description About section of the home page. Contains information about the restaurant and the opening hours.
 * @author Adrian Cardona Candil
 */

import hops from "../../assets/vectors/hops.png";
import Timetable from "./Timetable";

/**
 * @function About
 * @description Renders the about section of the home page.
 * @returns {JSX.Element} The about component.
 */

const About = ({ logo, information, sectionName, timetable }) => {
    return (
        <section className="sticky top-0 left-0 z-500 w-[100vw] bg-[var(--surface-light)] py-15 dark:bg-[var(--surface-dark)]">
            <div className="flex flex-col gap-10 px-10 md:flex-row md:items-center md:gap-5 md:px-35">
                <div className="flex flex-col gap-12.5 md:flex-2">
                    <h1
                        style={{ fontFamily: "'Dancing Script'" }}
                        className="text-6xl font-extrabold"
                    >
                        {logo}
                    </h1>
                    <h2
                        style={{ fontFamily: "'Dancing Script'" }}
                        className="text-2xl tracking-wide italic"
                    >
                        {information.title}
                    </h2>
                    <p className="leading-8 font-light">{information.text}</p>
                </div>
                <div className="self-end md:flex-1">
                    <img src={hops} alt="Beer hops art image" />
                </div>
            </div>
            <div>
                <Timetable sectionName={sectionName} timetable={timetable} />
            </div>
        </section>
    );
};

export default About;
