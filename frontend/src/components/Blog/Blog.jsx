/**
 * @file Blog.jsx
 * @description Blog component. Displays a list of blog posts.
 * @author Adrian Cardona Candil
 */

import SideColumn from "../common/SideColumn";

// Mock data for the side column component
const aside = {
  logo: "Perez & Beers",
  mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  label: "Reserve",
  location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

/**
 * @function Blog
 * @description Renders a list of blog entries (important events, celebrations, etc.).
 * @returns {JSX.Element} The blog component.
 */

const Blog = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row">
        <SideColumn aside={aside} />
        <section className="md:flex-5"></section>
      </div>
    </main>
  );
};

export default Blog;
