// pages/api/toll-calculator.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const tollGuruApiKey = 'MJTb9DF28d98R76hNRqj7P7gDNP7qP6d';
// const tollGuruApiKey = 'demo'; // Replace with your TollGuru API key

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await axios.post(
      'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': tollGuruApiKey,
        },
      }
    );

    res.status(200).json(result.data);
  } catch (error) {
    console.error('Error calculating toll using TollGuru API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
