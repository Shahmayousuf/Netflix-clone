import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar" style={{padding:'15px'}}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Imglogo"
      />
      <div className="logavatar"><Link to={'/login'}>
      <button id="navlogin">LogIn</button></Link>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      /></div>
    </div>
  );
};

export default NavBar;
