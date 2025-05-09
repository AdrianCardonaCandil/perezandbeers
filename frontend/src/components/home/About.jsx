/**
 * @file About.jsx
 * @description About section of the home page. Contains information about the restaurant and the opening hours.
 * @author Adrian Cardona Candil
 */

import hops from "../../assets/vectors/hops.png"

/**
 * @function About
 * @description Renders the about section of the home page.
 * @returns {JSX.Element} The about component.
 */

const About = ({ logo, information, timetable }) => {
    return (
        <section className="w-screen sticky top-0 z-500 bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]">
            <div className="flex flex-col gap-10 md:gap-5 py-25 px-10 md:px-35 md:flex-row md:items-center">
                <div className="flex flex-col gap-12.5">
                    <h1 style={{ fontFamily: "'Dancing Script'" }} className="text-6xl font-extrabold">{logo}</h1>
                    <h2 style={{ fontFamily: "'Dancing Script'" }} className="tracking-wide italic text-2xl">{information.title}</h2>
                    <p className="font-thin leading-8">{information.text}</p>
                </div>
                <div>
                    <img src={hops} alt="Beer hops art image" />
                </div>
            </div>
        </section>
    )
}

export default About;