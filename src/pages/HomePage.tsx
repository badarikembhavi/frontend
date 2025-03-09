// pages/HomePage.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import MainCard from '../components/MainCard';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <MainCard
        cardTitle="Welcome to the Dashboard"
        subHeader="Here's some important information"
        darkTitle
        divider
        shadow="0px 4px 20px rgba(0,0,0,0.1)"
        contentSX={{ backgroundColor: '#f9f9f9' }}
        secondary={<Button variant="contained">Action</Button>}
      >
        <Typography variant="body1">
          This is a custom reusable card component built with MUI and your own props.
        </Typography>
      </MainCard>
    </Box>
  );
};

export default HomePage;
