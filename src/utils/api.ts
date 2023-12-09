// api.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.tollguru.com/v1/calc/route';

export const calculateToll = async (
  origin: string,
  destination: string,
  apiKey: string,
  waypoints?: Array<{ address: string }>,
  serviceProvider?: string,
  vehicle?: {
    type: string;
    weight: { value: number; unit: string };
    height: { value: number; unit: string };
    length: { value: number; unit: string };
    axles: number;
    emissionClass: string;
  }) => {
  try {
    const response = await axios.post(
      API_BASE_URL,
      {
        from: {
          address: origin,
          lat: null, // You can provide latitude if available
          lng: null, // You can provide longitude if available
        },
        to: {
          address: destination,
          lat: null, // You can provide latitude if available
          lng: null, // You can provide longitude if available
        },
        waypoints: waypoints,
        serviceProvider: serviceProvider,
        vehicle: vehicle,
        api_key: apiKey,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};
