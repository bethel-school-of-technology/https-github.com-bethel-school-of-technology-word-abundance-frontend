import React, { Component } from 'react';
import Landing from './Landing';

class Contact extends Component {
    render() {
        return (
            <div class='contactBody'>
                <br />
                <br />
                <br />

                 <h4>Contact Us</h4>
                <div className="ui form">
                    <div className="field">
                        <label>Text</label>
                        <textarea></textarea>
                    </div>
                    <div className="field">
                        <label>Short Text</label>
                        <textarea rows="2"></textarea>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Contact;