import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing-container">
        <div className="landing-title">
          <div className="landing-text">
            <h1>TrainSpota</h1>
            <p>
              The interactive map that makes finding stations & trains easy.
            </p>
            <Link style={{ textDecoration: "none" }} to="/map">
              <Button variant="contained" color="primary" disableElevation>
                View Map
              </Button>
            </Link>
          </div>
        </div>
        <div className="landing-image">
          <a
            className="attribution"
            href="https://www.freepik.com/vectors/tree"
          >
            Attribution
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
