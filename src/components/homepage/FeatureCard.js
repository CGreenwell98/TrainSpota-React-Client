import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ icon, description }) => {
  return (
    <div className="feature-card">
      <FontAwesomeIcon className="icon" icon={icon} />
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
