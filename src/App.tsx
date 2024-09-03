import GoogleMapComponent from "./components/GoogleMapComponent";
import Dashboard from "./components/Dashboard";
import SitePolygons from "./components/SitePolygons";
import DrawPolygon from "./components/DrawPolygon";
import { useCoordinates } from "./hooks/useCoordinates";

function App() {

  const { polygonCoordinates, addPolygonCoordinates, clearPolygonCoordinates, deleteLastCoordinate } = useCoordinates();
  
  return (
      <div className="flex flex-row h-screen">
        <Dashboard 
        polygonCoordinates={polygonCoordinates}
        clearPolygonCoordinates={clearPolygonCoordinates}
        deleteLastCoordinate={deleteLastCoordinate}
        />
        <GoogleMapComponent addPolygonCoordinates={addPolygonCoordinates}>
          <SitePolygons />
          <DrawPolygon polygonCoordinates={polygonCoordinates}/>
        </GoogleMapComponent>
      </div>
  );
}

export default App;
