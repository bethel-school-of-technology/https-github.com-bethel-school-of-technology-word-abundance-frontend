import React, { Component } from 'react';
import Card from '../../../../components/Card';
import SideNav from '../Layout/SideNav';

class SoundAndLighting extends Component {
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
                    <h3> Sound and Lighting</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default SoundAndLighting;