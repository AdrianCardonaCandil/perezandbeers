import SectionHeader from "./SectionHeader";
import images from "../../assets/images/export"

/**
 * @file Menu.jsx
 * @description Menu main section of the home page. Contains a brief description and a marquee of images.
 * @author Adrian Cardona Candil
 */

/**
 * @function ToLeftMarquee
 * @description Renders a marquee that scrolls images to the left.
 * @returns {JSX.Element} The marquee component.
 */

const AnimatedMarquee = ({ direction, imageSize }) => {
    console.log(direction, imageSize);
  return (
    <div className={`relative ${imageSize} overflow-hidden`}>
      <div className={`absolute flex h-full w-max gap-7.5`}>
        {images.map(image => 
            <img
                key={image.id}
                src={image.path}
                alt={image.alt}
                className="object-cover" 
            />
        )}
        {images.map(image => 
            <img
                key={image.id}
                src={image.path}
                alt={image.alt}
                className="object-cover"
            />
        )}
      </div>
    </div>
  );
};

/**
 * @function Menu
 * @description Menu component. Renders the menu section of the home page.
 * @returns {JSX.Element} The menu component.
 */

const Menu = ({ sectionName, information, sectionButton }) => {
  return (
    <section className="md:my-50 my-25 flex flex-col justify-between gap-20">
      <SectionHeader sectionName={sectionName} information={information} />
      <div className="flex flex-col gap-15 px-12.5">
        <AnimatedMarquee direction="animate-marquee-left" imageSize="h-75 md:h-100" />
        <AnimatedMarquee direction="animate-marquee-right" imageSize="h-25 md:h-50" />
      </div>
      <div className="grid place-content-center bg-[var(--surface-container-light)] p-15 text-[var(--on-tertiary-container-light)] underline underline-offset-5 dark:bg-[var(--surface-container-dark)] dark:text-[var(--on-tertiary-container-dark)]">
        <button>{sectionButton}</button>
      </div>
    </section>
  );
};

export default Menu;