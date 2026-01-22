import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function Map() {
  useEffect(() => {
    mapboxgl.accessToken =
      import.meta.env.VITE_MAPBOX_TOKEN || '';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });

  }, []);

  return (

    <>
    <div className='flex'>
    <div className='bg-amber-500 h-screen w-[70vh]'></div>
     <div
      id="map"
      style={{ width: '100%', height: '100vh' }}
    />
    </div>
    </>
    
  );
}

export default Map;
