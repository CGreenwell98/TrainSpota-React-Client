import React from "react";
import {
  faSearch,
  faUser,
  faMap,
  faSubway,
  faMouse,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";

const featuresList = [
  {
    icon: faSearch,
    description:
      "Search for any National Rail station in the entire UK or Ireland",
  },
  {
    icon: faMap,
    description:
      "View existing, planned and old railway routes overlayed over OpenStreetMap or satelitte imagery",
  },
  {
    icon: faSubway,
    description:
      "Train information for stopping and passing trains through a station over the next hour",
  },
  {
    icon: faMouse,
    description:
      "Click near any station to get quick acess to train information",
  },
  {
    icon: faTable,
    description:
      "Detailed train timetable for a given station and time period (coming soon)",
  },
  {
    icon: faUser,
    description:
      "Log-in to save your favourite stations or a specific timetable(coming soon)",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2>Features</h2>
        <div className="features-grid">
          {featuresList.map(({ icon, description }, i) => (
            <FeatureCard key={i} icon={icon} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
