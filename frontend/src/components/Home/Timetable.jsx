/**
 * @file Timetable.jsx
 * @description Contains the restaurant's opening hours as a timetable.
 * @author Adrian Cardona Candil
 */

/**
 * @function Timetable
 * @description Renders the timetable component.
 * @returns {JSX.Element} The timetable component.
 */

const Timetable = ({ timetable }) => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <button className="px-5 py-1 text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
          {timetable.name}
        </button>
      </div>
      <div className="divide-y-1 divide-[var(--primary-light)] dark:divide-[var(--primary-dark)]">
        {timetable.entries.map((entrie) => (
          <div
            key={entrie.day}
            className="flex justify-between p-5 font-light transition duration-300 hover:bg-[var(--surface-container-light)] dark:hover:bg-[var(--surface-container-dark)]"
          >
            <p>{entrie.day}</p>
            <p>{entrie.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
