import React, { Component } from 'react';
import Service from '../components/Service';

export class Services extends React.Component {
    render() {
        return (
            <div className="service">
                <br/>
                <Service uri="http://localhost:3001/services"/>
            </div>
        );
    }
}
export default Services;