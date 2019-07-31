import React, { Component } from 'react';
import Card from '../../../components/Card';
// import SideNavPage from '../Layout/SideNavPage';
class HealthAndBeauty extends Component {
    render() {
        return (
            <div>
            {/* <SideNav/> */}
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                      
                    </div>
                    <br />
                    <div className='col-sm-12'>
                    <h3> Health And Beauty</h3>
                    <Card />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}
export default HealthAndBeauty;