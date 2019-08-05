import React, { Component } from 'react';
// import Categories from '../../containers/Topics.js/Categories';
import SideNav from './SideNav';

class Marketplace extends Component {
    

    render() {
        let margin = {
            marginTop: 30
        }
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-3" style={margin}>
                        <h1>Marketplace</h1>
                        <SideNav />
                    </div>
                    <div className="col-sm-9">
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Marketplace;

