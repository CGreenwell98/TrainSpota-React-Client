import React, { useRef } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const nav = useRef(null);

  const onBurgerClick = () => {
    // nav.classList.toggle("nav-active");
    // navLinks.forEach((link, i) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.5}s`;
    //   }
    // });
  };

  return (
    <nav ref={nav}>
      <div className="logo">
        <b>TrainSpota</b>
      </div>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/map">
          <li className="nav-link">Map</li>
        </Link>
        <Link to="/user/sign-in">
          <li className="nav-link">Sign-In</li>
        </Link>
      </ul>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Nav;
