import React from 'react';
import spinner from './25.gif';

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <img src={spinner} alt='Loading...' />
    </div>
  );
};

const spinnerStyle = {
  width: '150px',
  height: '150px',
  display: 'block',
  margin: 'auto',
};

export default Spinner;
