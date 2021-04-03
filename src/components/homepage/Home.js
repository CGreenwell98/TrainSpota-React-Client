import React from "react";
import LandingPage from "./LandingPage";
import Features from "./Features";
import Nav from "../nav/Nav";
import "./home.css";

function Home() {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Features />
      <a href="https://www.freepik.com/vectors/tree">
        Tree vector created by macrovector - www.freepik.com
      </a>
    </div>
  );
}

export default Home;
