import React from 'react';
import './BRRCalculator.css';
import logo from './keyworx_logo.png';

const BRRCalculator = () => {
  return (
    <div className="calculator">
      <img src={logo} alt="Keyworx Logo" className="logo" />
      <h1>Keyworx BRR & ROI Calculator</h1>
    </div>
  );
};

export default BRRCalculator;
