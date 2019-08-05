import React from 'react';
import NavBar from './Navbar';

export default ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
