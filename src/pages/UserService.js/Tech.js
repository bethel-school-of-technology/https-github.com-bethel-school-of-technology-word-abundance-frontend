import React, { Component } from 'react';
import Card from '../../components/Card';
import SideNav from '../Layout/SideNav';
class Tech extends Component {
    render() {
        return (
            <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                      {/* <SideNav/> */}
                    </div>
                    <br />
                    <div className='col-sm-12'>
                    <h3> Tech Services</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Tech;