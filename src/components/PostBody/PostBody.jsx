import { useLoaderData } from "react-router-dom";


const PostBody = () => {
  const post = useLoaderData();
  console.log(post)
  const {title, body} = post
  return (
    <div>
      <h2> {title} </h2>
      <p> {body} </p>
    </div>
  );
};

export default PostBody;