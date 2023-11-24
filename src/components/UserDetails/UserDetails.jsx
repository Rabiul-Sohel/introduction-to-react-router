import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
  const userDetails = useLoaderData();
  console.log(userDetails);
  const {name, email, username} =userDetails
  return (
    <div>
    <h2>Details about User: {name} </h2>
      <p>User Name: {username}</p>
      <h4> Full Name: {name} </h4>
      <p>Email: {email} </p>
    </div>
  );
};

export default UserDetails;