// CalculateTollButton.tsx
import React from 'react';
import { calculateToll } from '../utils/api';

const CalculateTollButton: React.FC = () => {
  const handleClick = () => {
    // Trigger the toll calculation logic here
  };

  return (
    <button id="calculateToll" onClick={handleClick}>
      Calculate Toll
    </button>
  );
};

export default CalculateTollButton;
