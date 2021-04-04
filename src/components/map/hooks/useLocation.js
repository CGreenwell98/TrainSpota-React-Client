import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState([51.51, -0.12]);

  useEffect(() => {
    findLocation();
  }, []);

  const findLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation([coords.latitude, coords.longitude]),
      (err) => console.error(err)
    );
  };

  return [location, findLocation];
};

export default useLocation;
