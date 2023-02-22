import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/PostsSlice";
const Posts = () => {
  const posts = useSelector(selectAllPosts);
  const ShowPosts = posts.map((post) => (
    <article key={post.id}>
      <p>{post.description.substring(0, 100)}</p>
      <img src={post.img} alt="" />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {ShowPosts}
    </section>
  );
};

export default Posts;
