/**
 * @file SideColumn.jsx
 * @description Renders information about the restaurant on secondary pages.
 * @author Adrian Cardona Candil
 */

import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

/**
 * @function SideColumn
 * @description SideColumn component. Renders information on the side of secondary pages.
 * @returns {JSX.Element} SideColumn component.
 */

const SideColumn = ({ aside }) => {
  let icons = [<FaInstagram />, <FaXTwitter />, <FaTripadvisor />];
  return (
    <aside className="sticky top-0 flex flex-col justify-between bg-[var(--surface-container-light)] md:h-screen md:flex-1 dark:bg-[var(--surface-container-dark)]">
      <div className="flex flex-col gap-7.5 p-12.5 md:gap-10">
        <h1
          className="text-3xl font-extrabold"
          style={{ fontFamily: "'Dancing Script'" }}
        >
          {aside.logo}
        </h1>
        <p className="text-sm font-light">{aside.mission}</p>
        <div>
          <button className="py-0.15 px-2.25 text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
            <p>{aside.label}</p>
          </button>
        </div>
      </div>
      <div>
        <div className="flex gap-5 px-12.5 pb-12.5 text-xl">
          {icons.map((icon, index) => (
            <a key={index}>{icon}</a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideColumn;
