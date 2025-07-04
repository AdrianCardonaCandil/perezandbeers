/**
 * @file Front.jsx
 * @description Presents primary information like restuarant name, mission, etc.
 * @author Adrian Cardona Candil
 */

/**
 * @function Front
 * @description Front component. Displays primary information about the restaurant.
 * @returns {JSX.Element} Front component.
 */

const Front = ({ front }) => {
  return (
    <section className="fade-out flex items-center justify-center px-15 py-15 md:h-screen">
      <div className="flex flex-col items-start gap-10">
        <h1
          style={{ fontFamily: "'Dancing Script'" }}
          className="text-6xl font-extrabold"
        >
          {front.logo}
        </h1>
        <p className="font-light">{front.mission}</p>
        <button className="px-7.5 py-2 text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
          {front.label}
        </button>
      </div>
    </section>
  );
};

export default Front;
