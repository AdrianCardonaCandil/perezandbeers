import { Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import SectionHeader from "./SectionHeader";
import images from "../../assets/images/export";
import SectionFooter from "./SectionFooter";

/**
 * @file Events.jsx
 * @description Events main section of the home page. Contains information for specific events as celebrations, etc.
 * @author Adrian Cardona Candil
 */

/**
 * @function ImageSwiper
 * @description Renders a swiper component for the events section containing images that automatically transition.
 * @returns {JSX.Element} The swiper component.
 */

const ImageSwiper = () => {
  return (
    <div className="h-75 px-7.5 md:h-150 md:px-12.5">
      <Swiper
        modules={[Autoplay, Virtual]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1300}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
        }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image.id}
            virtualIndex={index}
            className="h-full w-full"
          >
            <img
              className="swiper-lazy h-full w-full object-cover"
              src={image.path}
              alt={image.alt}
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/**
 * @function Events
 * @description Renders the events section of the home page.
 * @returns {JSX.Element} The events section component.
 */

const Events = ({ events }) => {
  return (
    <section className="mt-25 flex flex-col justify-between gap-20">
      <SectionHeader
        sectionName={events.sectionName}
        information={events.information}
      />
      <ImageSwiper />
      <SectionFooter sectionButton={events.sectionButton} />
    </section>
  );
};

export default Events;
