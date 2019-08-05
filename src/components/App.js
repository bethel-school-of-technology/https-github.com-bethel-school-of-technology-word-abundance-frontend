import React from 'react';
import Header from './Navbar';
import Footer from './pages/Layout/Footer';
import './App.css'

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
