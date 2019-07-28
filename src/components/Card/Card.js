import React, { Component } from 'react'
// import {Button} from '../Button';
class Card extends Component {
    render() {
        return (

            // <Button/>
<div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className="ui cards raised-card">

                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href='https://www.facebook.com/olivia.k.wall'>Olivia</a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                <a href='/shoppingCart'>Buy </a>    
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href='https://www.facebook.com/adibfhanna'>Adib </a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Buy </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href='https://www.facebook.com/will.harris'>Will</a> </p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Buy </a> 
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
                                        <p>By <a href='https://www.facebook.com/olivia.k.wall'>Olivia</a></p>
                                    </div>
                                </div>
                                <br/>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Buy </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href='https://www.facebook.com/adibfhanna'>Adib </a></p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Buy </a> 
    </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="content">
                                    <div className="header">Description Of Service</div>
                                    <div className="description">
                                        <p>By <a href='https://www.facebook.com/will.harris'>Will</a> </p>
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <i className="add icon"></i>
                                    <a href='/shoppingCart'>Buy </a> 
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