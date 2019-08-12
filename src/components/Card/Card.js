import React, { Component } from 'react'
import Rate from './Rate';
import Star from './Star';

// import {Button} from '../Button';
class Card extends Component {
    render() {
        return (

       
<div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className="ui cards raised-card">

                            <div className="card">
                                <div className="content">
                                  
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Adib</a></p>
                                    </div>  
                                    <Rate/>
                                    <Star/>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                <a href='/shoppingCart'>Add To Shopping Cart </a>    
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Fiona </a></p>
                                    </div>
                                    <Rate/>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Will</a> </p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className="ui cards raised-card">

                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Olivia</a></p>
                                    </div>
                                </div>
                                <br/>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Joel </a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Joel </a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Joel </a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href=''>Ben</a> </p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Add To Shopping Cart </a> 
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Card;