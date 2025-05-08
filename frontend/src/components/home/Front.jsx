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
            <div className="front-fade-out my-10 flex w-1/2 flex-col items-start gap-10 md:mt-50 md:w-2/3">
                <h1
                    className="front-fade-in text-6xl font-extrabold"
                    style={{ fontFamily: "'Dancing Script'" }}
                >
                    {logo}
                </h1>
                <p className="front-fade-in text-xs font-light">{message}</p>
                <img
                    className="fade-in hidden md:block"
                    src={divider}
                    alt="section divider"
                ></img>
                <button className="front-fade-in px-7.5 py-2 text-sm text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">
                    {label}
                </button>
            </div>
        </section>
    );
};

export default Front;
