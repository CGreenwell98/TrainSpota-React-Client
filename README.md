# Trainspota React Client App

In general for the map:

- Context was used for data that both the map and the UI needed to access (refer to Map.js)
- Composition + inheritance was used for state data that just the UI required (stored in MapUI.js or it's child components)

## Context

### RailwayDataContext.js

RailwayDataContext.js stores the data and relevant state related to trains, it imports three custom hooks that fetch new data from APIs on the backend server that are used to update the related train state. The three custom hooks are as follows:

- **useStationSearch.js**: This finds all stations that include the input term. (used for search bar)
- **useStationTrains.js**: This obtains information about trains that either stop or pass thorugh the selected station.
- **useStationLocate.js**: This finds the closest station for a given coordinate. (used for map clicks)

State for the current station aswell as which data is displayed to the user is also stored in this context.

### MapContext.js

MapContext.js stores data and state related to rendered map items and map functions. It imports the following custom hooks:

- **useStationMarkerList.js**: This tracks and changes the list of station markers that are displayed on the map.

State for the map layers used for the rendering of the Leaflet map are also stored here.

### UserContext.js

UserContext.js stores the data and state related to the users information. It imports the following custom hooks:

- **useFavouriteStations.js**: This tracks and changes the list of favourite stations that can be viewed by opening the favourite station tab.

## Map UI

The map UI consists of four main components that can be displayed to the user:

- **SideBar.js**: This is the main piece of navigation always diplayed to the user, it allows for the other three main component's display to be toggled.
- **Search.js**: This renders the search bar aswell as the search results and train results (refer to SearchContainer.js seen below).
- **FavouritesContainer.js**: This renders the user's favourite stations.
- **MapOptionsContainer.js**: This renders the options for the currently rendered map layers.

### SearchContainer.js

SearchResultsContainer.js is the parent component from which all search result and train data in the MapUI is displayed to the user through children. State obtained from RailwayDataContext.js is passed down to children via props, whereas setter and API functions are imported directly into the child component via useContext, this ensures that props are used only for passing down data in this section of the app.

### Train Data Loading Dots

Within TrainResults.js there are three useEffect hooks called that control the rendering of the loading dots. When a train stopping/passing button is selected the passBtnActive state will change to become true or false (if the selected button is not currently active). This state change activates the first useEffect which causes the loading dots to appear. Once the stationTrainData state is updated with new data the second useEffect triggers causing the loading dots to disappear. The dots can also be made to appear when the current station changes, this is useful for when the train results are opened via a map click or favourite station click.

## Leaflet Map

React Leaflet was used for the rendering of the map and for the placement of station markers. Components were either imported or custom made for particlular functions. All files within components/map/leafletmap are custom React Leaflet componenents and are as follows:

- **AddMarker**: This adds a marker with a popup to a location on the map.
- **ChangeView**: This changes the current view to a particular location. useMemo was used to prevent this component from rerendering when the stopping or passing UI buttons were pressed.
- **MapClick**: This handles map clicks, sending data about the clicked location to RailwayDataContext.js functions.
- **MapLayers**: This renders the current map layers stored in MapContext.js.
- **StationMarkers**: This renders the station markers stored in a list in MapContext.js.
