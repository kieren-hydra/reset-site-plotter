import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Access the API key from environment variables
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API;

const containerStyle = {
  width: '100%',
  height: '100vh', // Adjust height as needed
};

const center = {
  lat: -34.397, // Default latitude
  lng: 150.644, // Default longitude
};

const GoogleMapComponent = () => {
  // Load the Google Maps JavaScript API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey, // Make sure the API key is correctly set
  });

  if (loadError) {
    return <div>Error loading maps. Please try again later.</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>; // Display a loading state while the map is loading
  }

  return (
    <div className='h-screen w-full'> {/* Ensure full height and width */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* You can add markers, polygons, etc., here */}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent