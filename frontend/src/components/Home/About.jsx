/**
 * @file About.jsx
 * @description About section of the home page. Contains information about the restaurant and the opening hours.
 * @author Adrian Cardona Candil
 */

import images from "../../assets/images/export";
import Timetable from "./Timetable";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

/**
 * @function About
 * @description Renders the About section of the home page.
 * @returns {JSX.Element} The About section component.
 */

const About = ({ about }) => {
  let icons = [<FaInstagram />, <FaXTwitter />, <FaTripadvisor />];
  return (
    <section className="w-screen bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-5">
          <div className="flex flex-col gap-25 px-15 py-35 md:px-25 lg:px-35">
            <div className="flex flex-col gap-20">
              <h2
                style={{ fontFamily: "'Dancing Script'" }}
                className="text-6xl font-extrabold"
              >
                {about.logo}
              </h2>
              <p>{about.information}</p>
              <div className="flex gap-10 py-2.5 text-3xl">
                {icons.map((icon, index) => (
                  <a key={index}>{icon}</a>
                ))}
              </div>
            </div>
            <Timetable timetable={about.timetable} />
          </div>
        </div>
        <div className="sticky top-0 h-screen flex-3">
          <img
            className="h-full w-full object-cover"
            src={images[1].path}
            alt={images[1].alt}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
