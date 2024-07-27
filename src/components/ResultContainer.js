import React from 'react';
import './ResultContainer.css';

const ResultContainer = ({ result, medicines }) => {
  return (
    <div className="result-container">
      <div className="disease-name">{result.disease}</div>
      <div className="medicine-list">
        {medicines.map((medicine, index) => (
          <div key={index} className="card">
            <div className="card-details">
              <div className="text-title">{medicine.name}</div>
              <div className="text-body">Dosage: {medicine.dosage}</div>
              <div className="text-body">Duration: {medicine.duration}</div>
              <div className="text-body">Time: {medicine.time}</div>
              <div className="text-body">Use: {medicine.use}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultContainer;
