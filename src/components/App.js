import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/App.css'



export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
