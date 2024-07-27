import React, { useState } from 'react';
import Container from '@mui/material/Container';
import ImageUpload from '../components/ImageUpload';
import ResultContainer from '../components/ResultContainer';
import './Home.css';

const Home = () => {
  const [result, setResult] = useState({
    disease: 'Sample Disease',
    medicines: [
      {
        name: 'Medicine 1',
        dosage: '50mg',
        duration: '1 week',
        time: 'Morning',
        use: 'Take with water',
      },
      {
        name: 'Medicine 2',
        dosage: '10mg',
        duration: '2 weeks',
        time: 'Evening',
        use: 'Take with food',
      },
    ],
  });

  const [medicines, setMedicines] = useState(result.medicines);

  const handleResult = (data) => {
    setResult(data);
    setMedicines(data.medicines);
  };

  return (
    <Container className="home-container">
      <div className="content-container">
        <div className="image-upload-container">
          <ImageUpload setResult={handleResult} />
        </div>
        <div className="result-section">
          {result && (
            <ResultContainer result={result} medicines={medicines} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
