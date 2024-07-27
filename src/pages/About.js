import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Cropify
      </Typography>
      <Typography variant="body1">
        Cropify is a revolutionary platform for identifying crop diseases and providing appropriate solutions. Our mission is to empower farmers with the tools and knowledge they need to maintain healthy crops and improve yields.
      </Typography>
    </Container>
  );
};

export default About;
