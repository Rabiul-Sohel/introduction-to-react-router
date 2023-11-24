import { Link } from "react-router-dom";


const User = ({ user }) => {
  const { id, name, email } = user;
  const userStyle = {
    border: '2px solid yellow',
    borderRadius: '8px',
    margin: '20px',
    padding: '20px'
  }
  return (
    <div style= {userStyle}>
      <h2>Name: {name} </h2>
      <h3>Id: {id} </h3>
      <p>Email: {email} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click me</button>
      </Link>
    </div>
  );
};

export default User;