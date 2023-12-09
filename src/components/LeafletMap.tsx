// LeafletMap.tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { LatLngExpression } from 'leaflet';
import { decodePolyline } from '../utils/polylineDecoder';
import 'leaflet/dist/leaflet.css';
import fetchGooglePolyline from '@/api/fetchPolyline';

const LeafletMap: React.FC = () => {
    const [routePolyline, setRoutePolyline] = useState<LatLngExpression[]>([]);
    const [markers, setMarkers] = useState<{ position: LatLngExpression; tollDetails: { cost: number; additionalInfo: string } }[]>([]);
    const apiKey = 'AIzaSyCtjfTGVOpKNFV73JE770mvc1IKAHvFczg'; // Replace with your Google Maps API key
    const tollGuruApiKey = '9RjJn6G7d2HT6P6bDDtLBQgBMr9JHmtP';


    // Function to use the Google Polyline in TollGuru API
    const calculateTollUsingTollGuru = async (googlePolyline: string) => {
        try {
            const result = await axios.post(
                'https://api.tollguru.com/v1/calc/route',
                {
                    polyline: googlePolyline,
                    vehicleType: '2AxlesAuto',
                    key: tollGuruApiKey,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const tollGuruPolyline = result.data.trip[0]?.route?.encoded_route;

            if (tollGuruPolyline) {
                const decodedPolyline = decodePolyline(tollGuruPolyline);
                setRoutePolyline(decodedPolyline);

                const markersData = result.data.trip[0]?.route?.costsByType?.toll?.map((toll: any) => ({
                    position: [toll.location.latitude, toll.location.longitude],
                    tollDetails: {
                        cost: toll.toll.cost,
                        additionalInfo: toll.toll.description,
                    },
                })) || [];

                setMarkers(markersData);
            } else {
                console.error('No route polyline found in the TollGuru API response.');
            }
        } catch (error) {
            console.error('Error calculating toll using TollGuru API:', error);
        }
    };

    const CallingFunction = async () => {
        const origin = 'New York, NY, USA';
        const destination = 'Los Angeles, CA, USA';

        // Fetch polyline from Google Maps API
        fetchGooglePolyline(origin, destination , apiKey)
            .then((googlePolyline) => {
                if (googlePolyline) {
                    // Use the obtained polyline to calculate toll using TollGuru API
                    calculateTollUsingTollGuru(googlePolyline); 
                }
            });
    }
    useEffect(() => {
        // Call the async function immediately
        CallingFunction();
    }, []);
    

    return (
        <div id="leafletMapContainer">

            <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: 600, width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Polyline for the route */}
                {routePolyline && <Polyline positions={routePolyline} pathOptions={{ color: 'blue' }} />}

                {/* Markers for toll details */}
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Popup>
                            <div>
                                <p>Cost: ${marker.tollDetails.cost}</p>
                                <p>{marker.tollDetails.additionalInfo}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
