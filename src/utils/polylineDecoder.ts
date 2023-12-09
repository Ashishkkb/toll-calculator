// polylineDecoder.ts
import { decode } from '@googlemaps/polyline-codec';

export const decodePolyline = (encodedPolyline: string) => {
  return decode(encodedPolyline);
};
