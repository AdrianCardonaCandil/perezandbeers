/**
 * @file Sections.jsx
 * @description Contains the main sections of the home page: Menu, Catalog and Events.
 * @author Adrian Cardona Candil
 */

import Menu from "./Menu";
import Catalog from "./Catalog";
import Events from "./Events";
import About from "./About";

/**
 * @function Sections
 * @description Renders the main sections of the home page: Menu, Catalog and Events.
 * @returns {JSX.Element} The sections component.
 */

const Sections = ({ menu, catalog, events, about }) => {
    return (
        <div>
            <div id="main-sections">
                <Menu
                    sectionName={menu.sectionName}
                    information={menu.information}
                    sectionButton={menu.sectionButton}
                />
                <Catalog
                    sectionName={catalog.sectionName}
                    information={catalog.information}
                    categories={catalog.categories}
                    sectionButton={catalog.sectionButton}
                />
                <Events
                    sectionName={events.sectionName}
                    information={events.information}
                    sectionButton={events.sectionButton}
                />
            </div>
            <About logo={about.logo} information={about.information} sectionName={about.sectionName} timetable={about.timetable} />
        </div>
    );
};

export default Sections;
