import React from 'react';
import './Result.css';

const Result = ({ image }) => {
  // Example data for medicines (replace with your actual data)
  const medicines = [
    { name: 'Medicine 1' },
    { name: 'Medicine 2' },
    { name: 'Medicine 3' },
    { name: 'Medicine 4' },
    { name: 'Medicine 5' },
    { name: 'Medicine 6' },
    { name: 'Medicine 7' },
    { name: 'Medicine 8' },
    { name: 'Medicine 9' },
    { name: 'Medicine 10' }
  ];

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="disease-name">Detected Disease: Example Disease</div>
        <div className="medicine-list">
          {medicines.map((medicine, index) => (
            <div className="medicine-card" key={index}>
              <div className="medicine-details">
                <div className="text-title">{medicine.name}</div>
                <div className="text-body">Details about {medicine.name}</div>
              </div>
              <button className="medicine-button">Get Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
