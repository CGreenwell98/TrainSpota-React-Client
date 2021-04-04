import MapUI from "./mapUI.js";

class Map {
  _map;
  _currentLayer = "openStreetMap";
  _showTrainRoutes = true;
  _stationMarkers = [];
  searchedStations;
  _clickedTimeStamp;

  _loadMap() {
    this._map = L.map("map")
      .locate({ setView: true, maxZoom: 15 })
      .on("click", this._mapClick.bind(this));
  }

  panToCurrentPosition() {
    this._map.locate();

    this._map.on("locationfound", (e) => {
      this._map.flyTo(e.latlng, 15);
      this._addMarker(e.latlng, "You Are Here");
    });
    this._map.on("locationerror", (e) => alert(e.message));
  }

  changeMapType() {
    this._map.removeLayer(this._mapLayers[this._currentLayer]);
    this._currentLayer =
      this._currentLayer === "openStreetMap" ? "satelitte" : "openStreetMap";
    this._map.addLayer(this._mapLayers[this._currentLayer]);
  }

  toggleTrainRoutes() {
    this._showTrainRoutes = !this._showTrainRoutes;
    if (this._showTrainRoutes)
      this._map.addLayer(this._mapLayers.openRailwayMap);
    else this._map.removeLayer(this._mapLayers.openRailwayMap);
  }

  async fetchStationData(stationName) {
    try {
      this.searchedStations = await fetch(
        `/map/search-station/${stationName}`
      ).then((res) => res.json());
      if (this.searchedStations.length === 1) {
        this.panToStation(0);
      }
      let stationData = this.searchedStations.map((station) => ({
        name: station.name,
        code: station.station_code,
      }));
      return stationData;
    } catch (err) {
      console.error(err);
    }
  }

  panToStation(index) {
    const coords = this._getCoords(this.searchedStations[index]);
    this._map.flyTo(coords, 15);
    this._addMarker(coords, this.searchedStations[index].name);
  }

  _addMarker(coords, popupText) {
    // Prevent multiple markers for the same station:
    if (this._stationMarkers.includes(popupText)) return;
    const marker = L.marker(coords)
      .addTo(this._map)
      .bindPopup(
        L.popup({
          autoClose: false,
          className: `popup`,
          closeButton: false,
        })
      )
      .setPopupContent(popupText)
      .openPopup()
      .on("click", this._mapClick.bind(this));
    this._stationMarkers.push(popupText);
  }

  _getCoords(object) {
    const { latitude, longitude } = object;
    return [latitude, longitude];
  }

  async getTrainData(stationCode, type) {
    try {
      const trainData = await fetch(
        `/map/station-trains/${stationCode}/${type}`
      ).then((res) => res.json());
      return trainData;
    } catch (err) {
      console.error(err);
    }
  }

  async _mapClick(e) {
    // Prevent leaflet map click bug:
    const clickTimeInterval =
      e.originalEvent.timeStamp - this._clickedTimeStamp;
    if (clickTimeInterval < 200) return;
    this._clickedTimeStamp = e.originalEvent.timeStamp;
    // finding closest station to coords:
    this._findClosestStation(e.latlng);
  }

  async _findClosestStation({ lat, lng }) {
    try {
      const closestStation = await fetch(
        `/map/closest-station/${lat}/${lng}`
      ).then((res) => res.json());
      if (closestStation.distance > 400) return MapUI.hideSearchBox();
      this._addMarker(this._getCoords(closestStation), closestStation.name);
      MapUI.displayClosestStation(closestStation);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Map();
