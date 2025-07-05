/**
 * @file Posts.jsx
 * @description Displays a list of blog posts. One for each important event, celebration, etc.
 * @author Adrian Cardona Candil
 */

import Post from "./Post";

/**
 * @function Posts
 * @description Posts component. List of blog posts.
 * @returns {JSX.Element} Posts component.
 */

const Posts = ({ posts }) => {
    return (
        <section className="md:flex-4">
            <div className="p-10 py-10 border-y border-[var(--surface-container-light)] dark:border-[var(--surface-container-dark)] md:p-30 text-xl md:text-4xl tracking-wide md:border-x md:border-b font-['EB_Garamond']">
                <h1>{posts.header}</h1>
            </div>
            <div className="grid grid-cols-1 border-[var(--surface-container-light)] dark:border-[var(--surface-container-dark)] md:grid-cols-2 gap-20 p-10 md:p-30 md:border-x md:border-b">
                {posts.entries.map(post => 
                    <Post key={post.title} post={post} />
                )}
            </div>
        </section>
    )
}

export default Posts;