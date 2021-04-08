import { useMap } from "react-leaflet";

const ChangeView = ({ center, zoom = 15 }) => {
  const map = useMap();
  if (center) map.flyTo(center, zoom);

  return null;
};

export default ChangeView;
