import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material'; 
import Image from '../assets/image.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
      {/* Main Container for About Us */}
      <div className="w-full max-w-4xl">
        
        {/* Card for About Us Content (text about leaderboard) */}
        <Card className="mb-6 shadow-lg">
          <CardContent>
            <Typography variant="h4" gutterBottom className="text-center">
              About the Leaderboard
            </Typography>
            <Typography variant="body1" paragraph>
              Our platform is designed to bring the most comprehensive and up-to-date information about the game of cricket. From player rankings to live scores, we strive to keep you informed about all things cricket. 
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you are a casual fan or a passionate follower, our leaderboard provides you with real-time rankings of the best cricket players, keeping you updated with their performance across formats. 
            </Typography>
          </CardContent>
        </Card>

        {/* Image Section for Cricket */}
        <div className="mb-6">
          <img 
            src={Image} 
            alt="Cricket Image" 
            height="200px" 
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Video Section for Cricket Highlights or Introduction */}
        <div className="mb-6">
          <Typography variant="h5" className="text-center mb-12 pb-8">Watch Highlights</Typography>

          {/* Add margin space between heading and content */}
          <div className="mb-8">
            <Typography variant="body1" paragraph>
              Refers to a numerical value that represents a participant's performance in a competition or activity, displayed on a leaderboard which ranks individuals based on their score, allowing users to see how they compare to others and encouraging healthy competition; essentially, a higher score signifies a better performance and a higher ranking on the leaderboard.
            </Typography>
          </div>

          {/* Embed Video */}
          <div className="flex justify-center">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with a cricket video URL
              title="Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Card for Live Scores and Player Information */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-center mb-4 pb-6">
               Live Scores and Player Rankings
            </Typography>
            <Typography variant="body1" paragraph>
              Stay up-to-date with live scores from ongoing cricket matches around the world. We track every ball, every run, and every wicket to provide the most accurate score updates for fans. 
            </Typography>
            <Typography variant="body1" paragraph>
              Our player rankings showcase the best cricketers across all formats, based on their performances. From batting to bowling, we highlight the players who are dominating the game.
            </Typography>
          </CardContent>
        </Card>

        {/* Final Content Section */}
        <Card className="shadow-lg mt-6">
          <CardContent>
            <Typography variant="h6" className="text-center mb-4 pb-6">
              Our Platform
            </Typography>
            <Typography variant="body1" paragraph>
              Fans trust our platform to get real-time updates on player rankings and live scores. Whether you're following your favorite team or watching the rankings to see who is on top, we bring you the data you need, when you need it.
            </Typography>
            <Typography variant="body1" paragraph>
              Our goal is to make cricket more accessible by providing a central hub for all things cricket, from the leaderboard to live scores and everything in between.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
