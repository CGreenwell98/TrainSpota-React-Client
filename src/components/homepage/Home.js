import React from "react";
import LandingPage from "./LandingPage";
import Features from "./Features";
import Nav from "../nav/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Features />
    </div>
  );
}

export default Home;
