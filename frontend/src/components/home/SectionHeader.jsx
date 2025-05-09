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
        <div className="mb-15">
            <div className="menu-fade-in p-12.5">
                <button className="px-7.5 py-2 font-bold text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
                    {sectionName}
                </button>
            </div>
            <div className="flex flex-col gap-10 px-10 md:px-15">
                <h2
                    style={{ fontFamily: "'Dancing Script'" }}
                    className="menu-fade-in text-4xl"
                >
                    {information.title}
                </h2>
                <p className="menu-fade-in leading-8 font-light">
                    {information.text}
                </p>
                <img
                    className="fade-in hidden md:block"
                    src={divider}
                    alt="section divider"
                ></img>
            </div>
        </div>
    );
};

export default SectionHeader;
