import React, { Component } from 'react';
import axios from 'axios';
import './components.css';
import Navbar from '../pages/Layout/Navbar';
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
    componentWillMount() {
        axios.get(servicesAPI)
            .then(result => {
                this.setState({
                    services: result.data.services
            })
        })
    }

    render() {
        const { services } = this.state
        console.log(this.state.services);
        return (
            <main>
                <Navbar/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="ui cards raised-card">
                                <div className="card" style = {{width: '100%'}}>
                                    <div className="content">
                                        {services.map(service =>(
                                            <div className="key" key={service._id}>
                                                {/* <img src="{service.serviceImage}"/> */}
                                                <div className="header">{service.name}</div>
                                                <div className="card-body">
                                                    <h5 className="category">Category: {service.category}</h5>
                                                    
                                                <p className="description">Description: {service.description}</p>
                                                </div>
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