import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWVzdDIiLCJhIjoiY2x3bXR1dnVqMW4zZTJscDRrd3poNTFzeCJ9.X11BXUjQzFQLXAMQL-Ue7g';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-60.22439152, -33.33514792],
      zoom: 15
    });
    

    // Agregar un marcador al mapa
    const marker = new mapboxgl.Marker()
    .setLngLat([-60.22439152, -33.33514792]) 
    .addTo(map);
  

    return () => map.remove(); 
  }, []); 

  return <div ref={mapContainer} style={{ width: '400px', height: '400px' }} />;
};

export default Map;
