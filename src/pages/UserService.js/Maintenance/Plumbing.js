import React, { Component } from 'react';
import Card from '../../../components/Card';
import SideNav from '../Layout/SideNav';

class Plumbing extends Component {
    render() {
        return (
            <div>
            <SideNav/>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                      
                    </div>
                    <br />
                    <div className='col-sm-12'>
                    <h3> Plumbing Services</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Plumbing;