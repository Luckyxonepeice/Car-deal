import React from 'react';

const NotFound = () => {
  const notFoundStyle = {
    textAlign: 'center',
    marginTop: '100px',
  };

  const headingStyle = {
    fontSize: '48px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '24px',
    color: '#666',
    marginTop: '20px',
  };

  return (
    <div style={notFoundStyle}>
      <h1 style={headingStyle}>404 Not Found</h1>
      <p style={textStyle}>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;