import React, { Component } from 'react';
// import Search from './Search';

class Home extends Component {
    render() {
        return React.createElement('div', { 
            className: 'Home' }, React.createElement('h1', null, 'Home'));
        // return (
        //     <div>
        //         <br/>
        //         <p id="home">Home page content</p>
        //         <Search/>
        //     </div>
            
        // );
    }
}
export default Home;