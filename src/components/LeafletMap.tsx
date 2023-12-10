import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { LatLngExpression } from 'leaflet';
import { decodePolyline } from '../utils/polylineDecoder';
import 'leaflet/dist/leaflet.css';
import fetchGooglePolyline from '@/pages/apiNew/fetchPolyline';

interface TollDetails {
    id: number;
    name: string;
    cost: number;
    additionalInfo: string;
    type: string;
    tagCostReturn: number | null;
    tagCostMonthly: number | null;
    cashCostReturn: number | null;
    cashCostMonthly: number | null;
    currency: string;
    arrival: {
        distance: number;
        time: string;
    };
    timestamp_formatted: string;
    timestamp_localized: string;
    point: {
        type: string;
        geometry: {
            type: string;
            coordinates: [number, number];
        };
    };
}


const LeafletMap: React.FC = () => {
    const [routePolyline, setRoutePolyline] = useState<LatLngExpression[]>([]);
    const [markers, setMarkers] = useState<{ position: LatLngExpression; tollDetails: TollDetails }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [centerCord, setCenterCord] = useState<LatLngExpression>([22, 77]);
    const apiKey = 'AIzaSyCtjfTGVOpKNFV73JE770mvc1IKAHvFczg';

    const calculateTollUsingTollGuru = async (googlePolyline: string) => {
        try {
            setLoading(true);
            const result = await axios.post(
                '/api/toll-calculator',
                {
                    mapProvider: 'here',
                    polyline: googlePolyline,
                    locTimes: [
                        [0, 1660110342],
                        [30, 1660110642],
                        [60, 1660110942],
                        [232, 1660111182],
                    ],
                    vehicle: {
                        type: '2AxlesTaxi',
                        weight: { value: 20000, unit: 'pound' },
                        height: { value: 7.5, unit: 'meter' },
                        length: { value: 7.5, unit: 'meter' },
                        axles: 4,
                        emissionClass: 'euro_5',
                    },
                    units: { currency: 'INR' },
                    departure_time: 1660110342,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );


            const tollGuruPolyline = result.data.route?.polyline;

            if (tollGuruPolyline) {
                setMarkers([])
                setRoutePolyline([])
                const decodedPolyline = decodePolyline(tollGuruPolyline);
                setRoutePolyline(decodedPolyline);

                const tollDetails = result.data.route?.tolls;
                if (tollDetails) {
                    const newMarkers: { position: LatLngExpression; tollDetails: TollDetails }[] = [];

                    for (const toll of tollDetails) {
                        const newMarker = {
                            position: [toll.point.geometry.coordinates[1], toll.point.geometry.coordinates[0]] as LatLngExpression,
                            tollDetails: {
                                id: toll.id,
                                name: toll.name,
                                cost: toll.tagCost || toll.cashCost || 0,
                                additionalInfo: toll.additionalInfo || '',
                                type: toll.type,
                                tagCostReturn: toll.tagCostReturn || null,
                                tagCostMonthly: toll.tagCostMonthly || null,
                                cashCostReturn: toll.cashCostReturn || null,
                                cashCostMonthly: toll.cashCostMonthly || null,
                                currency: toll.currency,
                                arrival: toll.arrival,
                                timestamp_formatted: toll.timestamp_formatted,
                                timestamp_localized: toll.timestamp_localized,
                                point: toll.point,
                            },
                        };

                        newMarkers.push(newMarker);
                    }
                    setCenterCord(newMarkers[0].position);
                    setMarkers(newMarkers);
                }
            } else {
                console.error('No route polyline found in the TollGuru API response.');
            }
        } catch (error) {
            console.error('Error calculating toll using TollGuru API:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchGooglePolylineData = async (origin: string, destination: string) => {
        const originDemo = 'Delhi, India';
        const destinationDemo = 'Bangalore, India';
        try {
            const googlePolylinedata = await fetchGooglePolyline(origin ? origin : originDemo, destination ? destination : destinationDemo, apiKey);
            if (googlePolylinedata) {
                const googlePolyline = googlePolylinedata.routes[0]?.overview_polyline?.points;
                if (googlePolyline) {
                    calculateTollUsingTollGuru(googlePolyline);
                }
            }

        } catch (error) {
            console.error('Error fetching polyline from Google Maps API:', error);

        }
    };

    return (
        <>
            <div className='grid grid-cols-4 mt-24 mx-24 gap-10'>
                <div className='col-span-1'>
                    {/* Form component */}
                    <MapForm onSubmit={(origin, destination) => fetchGooglePolylineData(origin, destination)} />
                </div>
                <div className='col-span-3'>
                    <div id="leafletMapContainer" className="flex flex-col items-center justify-center space-y-4 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-xl">
                        {loading && <>
                            <div className="spinner flex items-center justify-center">
                                <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin w-10 h-10"></div>
                                <span className="ml-3 text-blue-500">Loading...</span>
                            </div>
                        </>}

                        {!loading && (
                            <MapContainer center={centerCord} zoom={4} className="w-full h-96 rounded-lg shadow-md overflow-hidden">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {routePolyline && <Polyline positions={routePolyline} pathOptions={{ color: 'blue' }} />}
                                {markers.map((marker, index) => (
                                    <Marker key={index} position={marker.position}>
                                        <Popup>
                                            <div>
                                                <p className="font-bold">Toll Name: {marker.tollDetails.name}</p>
                                                {/* Add more fields as needed */}
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        )}

                        {!loading && (
                            <div className="bg-white rounded-md shadow-md overflow-hidden w-full mt-8">
                                <table className="w-full border-collapse border border-gray-200">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="py-2 px-4 border">Toll Name</th>
                                            <th className="py-2 px-4 border">Cost</th>
                                            <th className="py-2 px-4 border">Type</th>
                                            <th className="py-2 px-4 border">Currency</th>
                                            {/* Add more table headers as needed */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {markers.map((marker, index) => (
                                            <tr key={index} className="bg-white">
                                                <td className="py-2 px-4 border">{marker.tollDetails.name}</td>
                                                <td className="py-2 px-4 border"> INR {marker.tollDetails.cost}</td>
                                                <td className="py-2 px-4 border">{marker.tollDetails.type}</td>
                                                <td className="py-2 px-4 border">{marker.tollDetails.currency}</td>
                                                {/* Add more table data cells as needed */}
                                            </tr>
                                        ))}
                                        {/* Total Cost Row */}
                                        <tr className="bg-gray-100">
                                            <td className="py-2 px-4 border font-bold">Total Cost</td>
                                            <td className="py-2 px-4 border font-bold">
                                                INR {markers.reduce((total, marker) => total + marker.tollDetails.cost, 0)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeafletMap;



const MapForm: React.FC<{ onSubmit: (origin: string, destination: string) => void }> = ({ onSubmit }) => {
    const [origin, setOrigin] = useState<string>('Delhi, India');
    const [destination, setDestination] = useState<string>('Bangalore, India');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(origin, destination);
    };

    useEffect(() => {
        onSubmit(origin, destination);
    }, [])

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-md shadow-md bg-white">
            <div className="mb-6">
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                    Origin
                </label>
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={origin}
                    onChange={(e) => {
                        setOrigin(e.target.value);
                    }}
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    placeholder="Enter origin"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                    Destination
                </label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={destination}
                    onChange={(e) => {
                        setDestination(e.target.value);
                    }}
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    placeholder="Enter destination"
                />
            </div>
            {/* Add more form fields as needed for vehicle details */}
            <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                {'Calculate Toll'}
            </button>
        </form>

    );
};