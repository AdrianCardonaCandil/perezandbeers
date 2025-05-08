/**
 * @file Events.jsx
 * @description Events main section of the home page. Contains information for specific events as celebrations, etc.
 * @author Adrian Cardona Candil
 */

import SectionHeader from "./SectionHeader";
import images from "../../assets/images/export";
import { Autoplay, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

/**
 * @function ImageSwiper
 * @description Renders a swiper component for the events section containing images that automatically transition.
 * @returns {JSX.Element} The swiper component.
 */

const ImageSwiper = () => {
    return (
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
    );
};

/**
 * @function Events
 * @description Renders the events section of the home page.
 * @returns {JSX.Element} The events section component.
 */

const Events = ({ sectionName, information, sectionButton }) => {
    return (
        <div className="mt-15 flex min-h-screen flex-col justify-between">
            <SectionHeader
                sectionName={sectionName}
                information={information}
            />
            <div className="h-75 px-10 md:h-125 md:px-15">
                <ImageSwiper />
            </div>
            <div className="mt-20 grid place-content-center bg-[var(--surface-container-light)] py-12.5 text-[var(--on-tertiary-container-light)] underline underline-offset-5 transition-all duration-1000 hover:bg-[var(--tertiary-container-light)] md:py-17.5 dark:bg-[var(--surface-container-dark)] dark:text-[var(--on-tertiary-container-dark)] hover:dark:bg-[var(--tertiary-container-dark)]">
                <button>{sectionButton}</button>
            </div>
        </div>
    );
};

export default Events;
