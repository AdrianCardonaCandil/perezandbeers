import divider from "../../assets/divider.svg";

/**
 * @file Front.jsx
 * @description Defines the front presentation of the web site to new visitors.
 * @author Adrian Cardona Candil
 */

/**
 * @function Front
 * @description Front component. Renders textlogo, welcome message and reserve button.
 * @returns {JSX.Element} The front component.
 */

const Front = ({ logo, message, label }) => {
  return (
    <section className="flex items-center justify-center md:h-screen md:min-h-150">
      <div className="my-10 flex w-1/2 flex-col items-start gap-5 md:mt-50 md:w-2/3">
        <h1
          className="text-5xl font-extrabold"
          style={{ fontFamily: "'Dancing Script'" }}
        >
          {logo}
        </h1>
        <p className="text-xs font-light">{message}</p>
        <img
          className="hidden md:block"
          src={divider}
          alt="section divider"
        ></img>
        <button className="p-1.5 text-sm text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)]">
          {label}
        </button>
      </div>
    </section>
  );
};

export default Front;
