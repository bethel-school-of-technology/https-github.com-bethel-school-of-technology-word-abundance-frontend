import React, { Component } from 'react';
import Categories from '../../containers/Topics.js/Categories';
// import SideNav from './SideNav';

class Marketplace extends Component {
    render() {
        return (

            <div className='market'>
                <br />
                {/* <SideNav/> */}
                <h2>Marketplace</h2>
                <Categories />
            </div>
        );
    }
}

export default Marketplace;

