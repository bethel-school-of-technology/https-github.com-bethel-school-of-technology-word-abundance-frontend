import React from 'react';
import Landing from './pages/Layout/Landing';
import '../css/Home.css'


export default () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
          <Landing />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
  
};
