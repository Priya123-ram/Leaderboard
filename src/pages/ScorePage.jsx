import React, { useState, useEffect } from 'react';
import { TextField, Typography, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

const ScorePage = () => {
  const [scores, setScores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch scores from localStorage when the component mounts
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setScores(storedScores);
  }, []);

  // Handle score deletion
  const handleDelete = (id) => {
    const updatedScores = scores.filter(score => score.id !== id);
    setScores(updatedScores);
    localStorage.setItem('scores', JSON.stringify(updatedScores));  // Update localStorage
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter scores based on search query
  const filteredScores = scores.filter(score => 
    score.playerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-8">Score Board</h1>

      {/* Search Bar with Icon */}
      <div className="mb-8 w-full max-w-lg">
        <TextField
          label="Search by Player Name"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <SearchIcon className="text-gray-600 mr-2" />
            ),
          }}
          className="text-lg py-2"
        />
      </div>

      {/* Conditional Rendering of No Scores Found */}
      {filteredScores.length === 0 && (
        <Typography variant="body1" className="text-xl mb-10 text-gray-500">
          No Players found.
        </Typography>
      )}

      {/* Score Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-md">
        {filteredScores.map((score) => (
          <div key={score.id} className="flex flex-col items-center bg-white border rounded-lg p-6 shadow-md">
            {/* Player Name */}
            <div className="flex items-center mb-4 w-full">
              <Typography className="text-lg font-semibold w-1/3">Name:</Typography>
              <Typography className="text-xl font-medium w-2/3">{score.playerName}</Typography>
            </div>

            {/* Score */}
            <div className="flex items-center mb-4 w-full">
              <Typography className="text-lg font-semibold w-1/3">Score:</Typography>
              <Typography className="text-xl font-medium w-2/3">{score.score}</Typography>
            </div>

            {/* Delete Icon */}
            <IconButton
              color="error"
              onClick={() => handleDelete(score.id)}
              className="mt-4 text-2xl"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScorePage;
