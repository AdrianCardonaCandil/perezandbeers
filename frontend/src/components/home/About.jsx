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
            <div className="flex flex-col gap-10 border-red-900 border-2 py-25">
                <div className="flex flex-col text-center px-10 md:px-15 gap-10">
                    <h1 style={{ fontFamily: "'Dancing Script'" }} className="text-5xl font-extrabold">{logo}</h1>
                    <h2 className="tracking-wide italic">{information.title}</h2>
                    <p className="font-thin leading-8">{information.text}</p>
                </div>
                <div className="px-10 md:px-15 h-100 md:h-125">
                    <img className="" src={hops} alt="Beer hops art image" />
                </div>
            </div>
        </section>
    )
}

export default About;