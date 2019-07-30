import React, { Component } from 'react';
import Card from '../../components/Card';
import SideNav from '../Layout/SideNav';
class VisualArts extends Component {
    render() {
        return (
            <div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                  <SideNav/>    
                    </div>
                    <br />
                    <div className='col-sm-12'>
                    <h3> Visual Arts</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default VisualArts;