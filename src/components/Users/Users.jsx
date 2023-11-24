import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
  const users = useLoaderData()
  // console.log(users);
  return (
    <div>
      <h2>The Users: {users.length} </h2>
      <div className="user-container">
        {users.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
      <p>Our Vodro and fantastic users</p>
    </div>
  );
};

export default Users;