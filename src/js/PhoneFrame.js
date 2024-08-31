import React from 'react';

const PhoneFrame = ({ children }) => {
  return (
    <div className="phone-container">
      <div className="phone-frame">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;