/**
 * @file Post.jsx
 * @description Renders a single blog post.
 * @author Adrian Cardona Candil
 */

/**
 * @function Post
 * @description Post component. Displays a single blog post.
 * @returns {JSX.Element} Post component.
 */

const Post = ({ post }) => {
  return (
    <article className="flex flex-col gap-5">
        <div className="h-75 md:h-115">
            <img className="h-full w-full object-cover" src={post.image.path} alt={post.image.alt}></img>
        </div>
        <div className="flex flex-col gap-2.5 px-5">
            <div className="flex justify-between font-thin">
                <p>{post.date}</p>
                <p>{post.time}</p>
            </div>
            <h2 className="font-bold italic">{post.title}</h2>
            <p>{post.description}</p>
        </div>
    </article>
  )
}

export default Post;