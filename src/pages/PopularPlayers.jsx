
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularPlayer } from '../action';  // Import the action

const PopularPlayers = () => {
  const dispatch = useDispatch();

  const { players } = useSelector((state) => state);  // Get players and error from the store

  // Fetch players when the component mounts
  useEffect(() => {
    dispatch(getPopularPlayer());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Players</h1>

      {/* Grid layout for player cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.length === 0 ? (
          <p className="text-center">No players found. Please check back later.</p>
        ) : (
          players.map((player, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              {/* Player Name */}
              <h2 className="text-xl font-semibold mb-2">{player.name}</h2>
              {/* Player Rank */}
              <p className="text-gray-600 mb-2">Rank: {player.rank}</p>
              {/* Player Country */}
              <p className="text-gray-500">Country: {player.country}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularPlayers;
