import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);
  const pStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
  return (
    <div>
      <h2>Posts: {posts.length} </h2>
      <div style={pStyle}>
        {posts.map((post, idx) => (
          <Post key={idx} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;