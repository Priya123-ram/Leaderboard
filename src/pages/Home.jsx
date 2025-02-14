import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Modal, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate();
  
  
  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  
  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (playerName.length < 3) {
      setError('Player name must have at least 3 characters');
      return;
    }
    setError('');

    if (!score) {
      return; 
    }

    
    const newPlayerData = { id: Date.now(), playerName, score };
    const existingScores = JSON.parse(localStorage.getItem('scores')) || [];
    existingScores.push(newPlayerData);
    localStorage.setItem('scores', JSON.stringify(existingScores));

    
    setOpen(true);

    
    setTimeout(() => {
      setOpen(false);
    }, 3000);

    setPlayerName('');
    setScore('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-bold font-medium text-gray-700 mb-1">Player Name</label>
            <TextField
              variant="outlined"
              fullWidth
              value={playerName}
              onChange={handlePlayerNameChange}
              placeholder="Enter Player Name"
              required
              error={!!error}
              helperText={error || " "}
              className="mb-2"
            />
            {playerName.length < 3 && playerName.length > 0 && (
              <Typography variant="body2" className="text-red-500">
                Enter atleast 3 characters
              </Typography>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-lg text-bold font-medium text-gray-700 mb-1">Score</label>
            <TextField
              type="number"
              variant="outlined"
              fullWidth
              value={score}
              onChange={handleScoreChange}
              placeholder="Enter Score"
              required
              className="mb-2"
            />
          </div>

          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </div>

    
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <Paper className="p-6 bg-green-100 rounded-md text-center w-80">
            <Typography variant="h6" className="text-green-800">
              Score Added Successfully!
            </Typography>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
