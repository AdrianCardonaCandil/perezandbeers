/**
 * @file Menu.jsx
 * @description Menu main section of the home page. Contains a brief description and a marquee of images.
 * @author Adrian Cardona Candil
 */

import divider from "../../assets/divider.svg";
import images from "../../assets/images/export";

/**
 * @function ToLeftMarquee
 * @description Renders a marquee of images that scrolls to the left.
 * @returns {JSX.Element} The marquee component.
 */

const ToLeftMarquee = () => {
    return (
        <div className="relative h-75 overflow-hidden md:h-100">
            <div className="menu-scroll-left absolute flex h-full w-max gap-7.5">
                {images.map((image) => (
                    <img
                        className="object-cover"
                        key={image.id}
                        src={image.path}
                        alt={image.alt}
                    ></img>
                ))}
                {images.map((image) => (
                    <img
                        className="object-cover"
                        key={image.id}
                        src={image.path}
                        alt={image.alt}
                    ></img>
                ))}
            </div>
        </div>
    )
}

/**
 * @function ToRightMarquee
 * @description Renders a marquee of images that scrolls to the right.
 * @returns {JSX.Element} The marquee component.
 */

const ToRightMarquee = () => {
    return (
        <div className="relative h-25 overflow-hidden md:h-50">
            <div className="menu-scroll-right absolute flex h-full w-max gap-7.5">
                {images.map((image) => (
                    <img
                        className="object-cover"
                        key={image.id}
                        src={image.path}
                        alt={image.alt}
                    ></img>
                ))}
                {images.map((image) => (
                    <img
                        className="object-cover"
                        key={image.id}
                        src={image.path}
                        alt={image.alt}
                    ></img>
                ))}
            </div>
        </div>
    )
}

/**
 * @function Menu
 * @description Menu component. Renders the menu section of the home page.
 * @returns {JSX.Element} The menu component.
 */

const Menu = ({ sectionName, information, sectionButton }) => {
  return (
    <section className="flex min-h-screen flex-col justify-between">
      <div className="p-12.5">
        <button className="px-7.5 py-2 text-sm font-bold inset-ring-2 inset-ring-[var(--primary-light)] dark:inset-ring-[var(--primary-dark)]">
          {sectionName}
        </button>
      </div>
      <div className="flex flex-col gap-10 px-10 md:px-15">
        <h2 style={{ fontFamily: "'Dancing Script'" }} className="text-4xl">
          {information.title}
        </h2>
        <p className="leading-8 font-thin">{information.text}</p>
        <img src={divider} alt="section divider"></img>
        <ToLeftMarquee />
        <ToRightMarquee />
      </div>
      <div className="mt-20 grid place-content-center bg-[var(--surface-container-light)] py-12.5 text-[var(--on-primary-container-light)] underline underline-offset-5 transition-all duration-1000 hover:bg-[var(--primary-container-light)] md:py-17.5 dark:bg-[var(--surface-container-dark)] dark:text-[var(--on-primary-container-dark)] hover:dark:bg-[var(--primary-container-dark)]">
        <button>{sectionButton}</button>
      </div>
    </section>
  );
};

export default Menu;
