import React from 'react';
import NavBar from './Navbar';
import Footer from './pages/Layout/Footer';
import './App.css'

export default ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
