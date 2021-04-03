import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const navLinks = useRef();

  const onBurgerClick = () => {
    navLinks.current.classList.toggle("nav-active");
  };

  return (
    <nav>
      <div className="logo">{/* <b>TrainSpota</b> */}</div>
      <ul ref={navLinks} className="nav-links">
        <Link style={{ textDecoration: "none" }} to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/map">
          <li className="nav-link">Map</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/user/sign-in">
          <li className="nav-link">Sign-In</li>
        </Link>
      </ul>

      <div onClick={onBurgerClick} className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Nav;
