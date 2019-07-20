import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return React.createElement('div', { 
            className: 'Contact' }, React.createElement('h1', null, 'Contact'));
        // return (
        //     <div className="contact">
        //         <br/>
        //         <p id='contact'>Contact </p>
        //     </div>
        // );
    }
}
export default Contact;