// Marker.tsx
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

interface MarkerProps {
  position: [number, number];
  tollDetails: { cost: number; additionalInfo: string };
}

const CustomMarker: React.FC<MarkerProps> = ({ position, tollDetails }) => {
  return (
    <Marker position={position}>
      <Popup>
        <div>
          <p>Cost: ${tollDetails.cost}</p>
          <p>{tollDetails.additionalInfo}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
