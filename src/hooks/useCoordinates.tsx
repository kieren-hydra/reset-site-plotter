import { useState, useEffect } from 'react';

type Coordinate = { lat: number; lng: number };

export const useCoordinates = () => {

  const [polygonCoordinates, setPolygonCoordinates] = useState<Coordinate[]>(() => {

    //use local storage for persistence
    const storedCoordinates = localStorage.getItem('coordinates');
    return storedCoordinates ? JSON.parse(storedCoordinates) : [];
  });

  // Sync coordinates with local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('coordinates', JSON.stringify(polygonCoordinates));
    console.log("Coordinates array in hook:", JSON.stringify(polygonCoordinates, null, 2));

  }, [polygonCoordinates]);


  const addPolygonCoordinates = (newCoord: Coordinate) => {
    setPolygonCoordinates((prevCoords) => [...prevCoords, newCoord]);
  };


  const clearPolygonCoordinates = () => {
    setPolygonCoordinates(() => []);
  };

  const deleteLastCoordinate = () => {
    setPolygonCoordinates((prevCoords) => [...prevCoords.slice(0, -1)])
  }

  return { polygonCoordinates, addPolygonCoordinates, clearPolygonCoordinates, deleteLastCoordinate };
};

