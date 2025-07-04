import SectionHeader from "./SectionHeader";
import images from "../../assets/images/export";
import "./home.css";
import SectionFooter from "./SectionFooter";

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
  return (
    <div className={`relative ${imageSize} overflow-hidden`}>
      <div className={`absolute ${direction} flex h-full w-max gap-7.5`}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.path}
            alt={image.alt}
            className="object-cover"
          />
        ))}
        {images.map((image) => (
          <img
            key={image.id}
            src={image.path}
            alt={image.alt}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
};

/**
 * @function Menu
 * @description Menu component. Renders the menu section of the home page.
 * @returns {JSX.Element} The menu component.
 */

const Menu = ({ menu }) => {
  return (
    <section className="mt-25 md:mt-50 flex flex-col justify-between gap-20">
      <SectionHeader
        sectionName={menu.sectionName}
        information={menu.information}
      />
      <div className="flex flex-col gap-15 px-7.5 md:px-12.5">
        <AnimatedMarquee
          direction="animate-marquee-left"
          imageSize="h-50 md:h-100"
        />
        <AnimatedMarquee
          direction="animate-marquee-right"
          imageSize="h-30 md:h-50"
        />
      </div>
      <SectionFooter sectionButton={menu.sectionButton} />
    </section>
  );
};

export default Menu;
