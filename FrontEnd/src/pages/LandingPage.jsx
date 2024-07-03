// src/App.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h3" gutterBottom>Welcome to Edunova</Typography>
        <Typography variant="subtitle1" gutterBottom>
          This is a simple landing page built using React and Material-UI.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default App;
