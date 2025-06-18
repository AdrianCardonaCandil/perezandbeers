import divider from "../../assets/divider.svg";

/**
 * @file SectionHeader.jsx
 * @description Defines the information displayed in the top part of every home page main section.
 * @author Adrian Cardona Candil
 */

/**
 * @function SectionHeader
 * @description Renders the header of a section with its section name, title, and text.
 * @returns {JSX.Element} The section header component.
 */

const SectionHeader = ({ sectionName, information }) => {
  return (
    <div className="px-12.5">
      <div className="mb-15">
        <button className="px-5 py-1 text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
          {sectionName}
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <h2 style={{ fontFamily: "'Dancing Script'" }} className="text-2xl font-bold">
          {sectionName}
        </h2>
        <p className="font-light">{information.text}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
