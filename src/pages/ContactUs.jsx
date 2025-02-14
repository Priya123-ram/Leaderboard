import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactUs = () => {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form logic, such as sending data to a server
  };

  return (
    <div className="container mx-auto p-6 flex justify-center items-start min-h-screen space-y-6">
      {/* Cards for Location, Contact Number, Email */}
      <Grid container spacing={4} className="w-full max-w-4xl" direction="column"> {/* Make cards stack vertically */}
        {/* Location Card */}
        <Grid item xs={12}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-4">Our Location</Typography>
              <Typography variant="body1" className="text-center mb-4">
                1234 Cricket Lane, Cricket City, 5678 Country.
              </Typography>

              {/* Map Below the Address */}
              <MapContainer 
                center={[51.505, -0.09]} 
                zoom={13} 
                style={{ width: '100%', height: '200px' }}
              >
                <TileLayer 
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>1234 Cricket Lane, Cricket City, 5678 Country.</Popup>
                </Marker>
              </MapContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Number Card */}
        <Grid item xs={12}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-4">Contact Number</Typography>
              <Typography variant="body1" className="text-center">
                +1 (123) 456-7890
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email ID Card */}
        <Grid item xs={12}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-4">Email ID</Typography>
              <Typography variant="body1" className="text-center">
                contact@cricket.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Us Form */}
      <div className="w-full max-w-xl">
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h5" className="text-center mb-4">Contact Us</Typography>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
