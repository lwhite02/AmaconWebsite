import React, { useRef, useEffect, useState } from "react";

const MapWithMarkers = ({ locations }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(new window.google.maps.Map(mapRef.current, {
        zoom: 2,
        center: { lat: 20, lng: 0 },
      }));

      setInfoWindow(new window.google.maps.InfoWindow());
    }
  }, [map]);

  useEffect(() => {
    if (map && infoWindow) {
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.latLng,
          map: map,
          title: location.name,
        });

        const content = `<div><strong>${location.name}</strong><br>Type: ${location.type}<br>Project: ${location.project}</div>`;

        marker.addListener("click", () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });

        marker.addListener("mouseover", () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
          infoWindow.close();
        });
      });
    }
  }, [map, infoWindow, locations]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapWithMarkers;
