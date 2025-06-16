import image from "../../assets/image.jpg"

/**
 * @file Home.jsx
 * @description Home component. Landing page for the website.
 * @author Adrian Cardona Candil
 */

/**
 * @function Hero
 * @description Hero image component. Image displayed trough the different main sections.
 * * @returns {JSX.Element} Hero component.
 */

const Hero = () => {
    return (
        <div className="flex-2 h-screen sticky top-0">
            <img className="h-full w-full object-cover" src={image}></img>
        </div>
    )
}

/**
 * @function MainSections
 * @description Main sections component. Displays the main content of the landing page.
 * @returns {JSX.Element} MainSections component.
 */

const MainSections = () => {
    return (
        <div className="flex-1 z-250 min-w-0">
            
        </div>
    )
}

/**
 * @function Home
 * @description Home component. Displays main content of the landing page through several sections.
 * @returns {JSX.Element} Home component.
 */

const Home = () => {
    return (
        <main>
            <div className="flex">
                <MainSections />
                <Hero />
            </div>
        </main>
    )
}

export default Home;