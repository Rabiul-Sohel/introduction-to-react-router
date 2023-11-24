import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const { title, body, id } = post;
  const postStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div style={postStyle}>
      <h2 style={{flexGrow: '1'}}> {title} </h2>
      <Link to={`/post/${id}`}>
        <button>Body</button>
      </Link>
    </div>
  );
};

export default Post;