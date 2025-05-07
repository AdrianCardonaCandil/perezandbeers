/**
 * @file Menu.jsx
 * @description Menu main section of the home page. Contains a brief description and a marquee of images.
 * @author Adrian Cardona Candil
 */

/**
 * @function Menu
 * @description Menu component. Renders the menu section of the home page.
 * @returns {JSX.Element} The menu component.
 */

const Menu = ({sectionName, information, sectionButton}) => {
    return (
        <section className="flex flex-col justify-between h-screen min-h-150">
            <div className="p-15">
                <button className="inset-ring-2 inset-ring-[var(--primary-light)] dark:inset-ring-[var(--primary-dark)] px-7.5 py-2 text-sm font-bold">{sectionName}</button>
            </div>
            <div>
                <h2>{information.title}</h2>
                <p>{information.text}</p>
                <img></img>
                <div>
                    <img></img>
                </div>
            </div>
            <div>
                <button>{sectionButton}</button>
            </div>
        </section>
    )
}

export default Menu;