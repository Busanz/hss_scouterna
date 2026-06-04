'use client'

import  { useEffect, useRef } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
interface MapProps {
  center: [number, number]
  zoom?: number
  showMarker?: boolean
  markerColor?: string
}
const Maps = ({ center, zoom = 16, showMarker = true, markerColor ='#2563EB'}: MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://tiles.openfreemap.org/styles/bright/style.json',
      center,
      zoom,
      pitch: 0,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    requestAnimationFrame(() => mapRef.current?.resize());
    setTimeout(() => mapRef.current?.resize(), 200);

    if (showMarker) {
      new maplibregl.Marker({ color: markerColor })
        .setLngLat(center)
        .addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom, showMarker, markerColor]);

  return (
    <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-md overflow-hidden bg-blue-100 border-2 border-blue-500">
      <div ref={mapContainerRef} className="absolute inset-0" />
    </div>
  );
};

export default Maps;
