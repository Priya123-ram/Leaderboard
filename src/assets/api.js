// api.js
import axios from 'axios';

export const fetchPlayers = async () => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://cricket-live-line1.p.rapidapi.com/playerRanking/1',
  headers: {
    'x-rapidapi-key': '92bbeb4c68mshb890b4732d492e5p1d1740jsn177abf6e469a',
    'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
  }
    });
    return response.data;  // Return the response data
  } catch (error) {
    console.error('Error fetching players data');
  }
};


