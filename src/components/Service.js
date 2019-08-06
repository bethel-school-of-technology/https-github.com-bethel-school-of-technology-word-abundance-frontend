import React, { Component } from 'react';
import axios from 'axios';
// import { throwStatement } from '@babel/types';
// import { read } from 'fs';
const servicesAPI = 'http://localhost:3001/services';


export class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }
    callServiceAPI() {
        axios.get(servicesAPI)
            .then(result => this.setState({
                services: result.data.services
            }))
    }
    componentWillMount() {
        this.callServiceAPI();
    }

    render() {
        const { services } = { ...this.state }
        console.log(this.state.services);
        return (
            <main>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="ui cards raised-card">
                                <div className="card">
                                    <div className="content">
                                        {services.map(service =>(
                                            <div className="hidden" key={service._id}>
                                                <img src="{service.serviceImage}"/>
                                                <div className="header">{service.name}</div>
                                                <div className="category">Category: {service.category}</div>
                                                <div className="description">Description: {service.description}</div>
                                                <br></br>
                                                <br></br>
                                            <div className="ui bottom attached button">
                                                <i className="add icon"></i>
                                                <div className="hourlyrate">Hourly Rate: {service.hourlyrate}</div>
                                                    <a href='/shoppingCart'>Buy </a>
                                            </div>
                                            </div>
                                                                )
                                                    )
                                        }
                                    </div>
                                </div>
                                <br></br>
                                <br></br>                               
                           </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Service;