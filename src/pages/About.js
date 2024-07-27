import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly opaque for better visibility
  boxShadow: theme.shadows[3],
  borderRadius: '10px',
  backdropFilter: 'blur(8px)',
  height: '100%', // Ensure equal height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const About = () => {
  return (
    <Box sx={{ py: 3, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} xl={5}>
            <img
              src="/photo.jpg"
              alt="About 1"
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} lg={6} xl={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12} xl={11}>
                <Typography variant="h2" gutterBottom>
                  Who Are We?
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: '1.25rem', color: 'text.secondary' }}>
                  Welcome to Cropify, your trusted partner in modern agriculture. We are a cutting-edge agri-tech company dedicated to empowering farmers and enhancing crop productivity through innovative solutions. Our mission is to harness the power of technology to ensure healthier crops and more efficient farming practices.
                </Typography>
                <Typography variant="h4" gutterBottom>
                  What We Do
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <StyledPaper>
                      <Box display="flex" flexDirection="column" height="100%">
                        <BuildIcon sx={{ fontSize: 32, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                          Crop Disease Detection
                        </Typography>
                        <Typography variant="body2" color="text.secondary" flexGrow={1}>
                          Using advanced AI and machine learning algorithms, we provide accurate and timely detection of crop diseases. Our system analyzes images of your crops to identify diseases at an early stage, helping you take swift action to protect your harvest.
                        </Typography>
                      </Box>
                    </StyledPaper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledPaper>
                      <Box display="flex" flexDirection="column" height="100%">
                        <WhatshotIcon sx={{ fontSize: 32, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                          Climate and Weather-Based Crop Recommendations
                        </Typography>
                        <Typography variant="body2" color="text.secondary" flexGrow={1}>
                          We understand that the success of your crops depends significantly on the climate and weather conditions. Our platform offers personalized crop recommendations based on real-time climate and weather data, ensuring that you plant the right crops at the right time for optimal yield.
                        </Typography>
                      </Box>
                    </StyledPaper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
