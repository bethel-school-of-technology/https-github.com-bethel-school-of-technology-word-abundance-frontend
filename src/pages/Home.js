import React from 'react';
import Carousel from '../components/Carousel';
import '../css/Home.css'


export default () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
          <Carousel />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
  
};
