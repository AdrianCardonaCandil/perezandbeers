/**
 * @file SectionFooter.jsx
 * @description Defines the information displayed in the bottom part of every home page main section.
 * @author Adrian Cardona Candil
 */

/**
 * @function SectionFooter
 * @description Renders the footer of a section with its section button.
 * @returns {JSX.Element} The section footer component.
 */

const SectionFooter = ({ sectionButton }) => {
  return (
    <div className="grid place-content-center bg-[var(--surface-container-light)] p-15 text-[var(--on-secondary-container-light)] underline underline-offset-5 transition-colors duration-1000 hover:bg-[var(--secondary-container-light)] dark:bg-[var(--surface-container-dark)] dark:text-[var(--on-secondary-container-dark)] dark:hover:bg-[var(--secondary-container-dark)]">
      <button>{sectionButton}</button>
    </div>
  );
};

export default SectionFooter;
