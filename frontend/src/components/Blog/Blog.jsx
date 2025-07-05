/**
 * @file Blog.jsx
 * @description Blog component. Displays a list of blog posts.
 * @author Adrian Cardona Candil
 */

import SideColumn from "../common/SideColumn";
import Posts from "./Posts";
import images from "../../assets/images/export";

// Mock data for the side column component
const aside = {
  logo: "Perez & Beers",
  mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  label: "Reserve",
  location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

// Mock data for the posts component
const posts = {
    header: "Lorem ipsum dolor sit",
    entries: [
        {
            image: images[0],
            date: "01/01/2023",
            time: "12:00-22:00",
            title: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
        },
        {
            image: images[1],
            date: "02/01/2023",
            time: "12:00-22:00",
            title: "Consectetur adipiscing elit",
            description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image: images[2],
            date: "03/01/2023",
            time: "12:00-22:00",
            title: "Sed do eiusmod tempor incididunt",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            image: images[3],
            date: "04/01/2023",
            time: "12:00-22:00",
            title: "Ut enim ad minim veniam",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
}

/**
 * @function Blog
 * @description Renders a list of blog entries (important events, celebrations, etc.).
 * @returns {JSX.Element} The blog component.
 */

const Blog = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <SideColumn aside={aside} />
        <Posts posts={posts} />
        
      </div>
    </main>
  );
};

export default Blog;
