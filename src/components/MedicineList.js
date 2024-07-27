import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageUpload from '../components/ImageUpload';
import ResultContainer from '../components/ResultContainer';
import './Home.css';

const Home = () => {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <Container className="home-container">
      <Typography variant="h3" gutterBottom>
        Cropify: Crop Disease Identification
      </Typography>
      <div className="content-container">
        <div className="image-upload-container">
          <ImageUpload setResult={handleResult} />
        </div>
        <div className="result-section">
          {result && (
            <ResultContainer result={result} medicines={result.medicines} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
