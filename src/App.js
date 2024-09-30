import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            <Button color="inherit">Admin</Button>
            <Button color="inherit">Project Manager</Button>
            <Button color="inherit">Team Lead</Button>
            <Button color="inherit">Employee</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      
      <div
        style={{
          marginTop: '64px', // Adjust margin to accommodate the height of the AppBar
          height: '92vh',
          backgroundImage: `url('https://img.freepik.com/free-vector/office-background-video-conferencing_23-2148638208.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display:'fixed',
          
        }}
      >
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '3rem', // Responsive font size
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Shadow for better visibility
          }}
        >
          Office Management
        </h1>
      </div>
    </>
  );
}

export default App;
