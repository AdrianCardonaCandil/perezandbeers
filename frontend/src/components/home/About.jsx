/**
 * @file About.jsx
 * @description About section of the home page. Contains information about the restaurant and the opening hours.
 * @author Adrian Cardona Candil
 */

import hops from "../../assets/vectors/hops.png"
import Timetable from "./Timetable";

/**
 * @function About
 * @description Renders the about section of the home page.
 * @returns {JSX.Element} The about component.
 */

const About = ({ logo, information, sectionName, timetable }) => {
    return (
        <section className="sticky top-0 left-0 w-[100vw] z-500 bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] py-15">
            <div className="flex flex-col gap-10 md:gap-5 px-10 md:px-35 md:flex-row md:items-center">
                <div className="flex flex-col gap-12.5 md:flex-2">
                    <h1 style={{ fontFamily: "'Dancing Script'" }} className="text-6xl font-extrabold">{logo}</h1>
                    <h2 style={{ fontFamily: "'Dancing Script'" }} className="tracking-wide italic text-2xl">{information.title}</h2>
                    <p className="font-light leading-8">{information.text}</p>
                </div>
                <div className="md:flex-1 self-end">
                    <img src={hops} alt="Beer hops art image" />
                </div>
            </div>
            <div>
                <Timetable sectionName={sectionName} timetable={timetable}/>
            </div>
        </section>
    )
}

export default About;