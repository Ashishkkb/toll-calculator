import axios from "axios";

export default function fetchGooglePolyline(
  origin: string,
  destination: string,
  apiKey: string
) {
  const config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config)
    .then((response) => {
      const googlePolyline = response.data.routes[0]?.overview_polyline?.points;

      if (googlePolyline) {
        return googlePolyline;
      } else {
        console.error(
          "No route polyline found in the Google Maps API response."
        );
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching polyline from Google Maps API:", error);
      return null;
    });
}
