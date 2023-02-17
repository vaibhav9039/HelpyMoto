import React, { useState, useEffect } from "react";

const Latlong: React.FC = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        console.error("Geolocation is not supported by your browser.");
      }
    );
  }, []);

  return (
    <div>
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
    </div>
  );
};

export default Latlong;