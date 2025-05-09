/**
 * @file Timetable.jsx
 * @description Defines a timetable that shows the opening hours of the restaurant.
 * @author Adrian Cardona Candil
 */

import divider from "../../assets/divider.svg"

/**
 * @function Timetable
 * @description Renders the timetable component.
 * @returns {JSX.Element} The timetable component.
 */

const Timetable = ({ sectionName, timetable }) => {
    return (
        <div className="px-10 md:px-35 flex flex-col gap-15 2xl:w-2/3 mt-10">
            <div className="self-end">
                <button className="px-7.5 py-2 font-bold text-[var(--primary-light)] inset-ring-2 inset-ring-[var(--primary-light)] dark:text-[var(--primary-dark)] dark:inset-ring-[var(--primary-dark)]">{sectionName}</button>
            </div>
            <div className="flex flex-col gap-10 md:gap-15">
                {timetable.map(entrie => 
                    <div className="flex flex-col gap-5 md:gap-10">
                        <div className="flex justify-between items-center">
                            <p style={{ fontFamily: "'Dancing Script'" }}>{entrie.days}</p>
                            <p className="font-thin">{entrie.hours}</p>
                        </div>
                        <img src={divider} alt="section divider" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Timetable;