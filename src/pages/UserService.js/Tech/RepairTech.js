import React, { Component } from 'react';
import Card from '../../../../components/Card';
import SideNav from '../../../Layout/SideNav';

class RepairTech extends Component {
    render() {
        return (
            <div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                      <SideNav/>
                    </div>
                    <br />
                    <div className='col-sm-10'>
                    <h3> Repair Technician Services</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default RepairTech;