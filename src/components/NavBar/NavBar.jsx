import { NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
  return (
    <div className="nav-container">
      <nav id="sidebar">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/users">
          Users
        </NavLink>
        <NavLink to="/posts">
          Posts
        </NavLink>
        <NavLink to="/albums">Album</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;