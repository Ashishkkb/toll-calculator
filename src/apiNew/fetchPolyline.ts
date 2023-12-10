import axios from "axios";

export default async function fetchGooglePolyline(
  origin: string,
  destination: string,
  apiKey: string
) {
  try {
    // Make a request to the Next.js API route
    const response = await axios.get(`/api/directions`, {
      params: {
        origin: origin,
        destination: destination,
        apiKey: apiKey,
      },
    });

    // Handle the response data
    console.log(response.data);

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    throw error;
  }
}
