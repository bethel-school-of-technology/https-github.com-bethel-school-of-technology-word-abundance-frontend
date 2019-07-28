import React, { Component } from 'react'

class CatCard extends Component {
    render() {
        return (

       
            <div className="ui cards raised-card">

                <div className="catCard">
                    <div className="content">
                        <div className="header">Description Of Service</div>
                        <div className="description">
                            <p>By <a href='Tech'>Olivia</a></p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Buy
    </div>
                </div>
                <br />
                <div className="catCard">
                    <div className="content">
                        <div className="header">Description Of Service</div>
                        <div className="description">
                            <p>By <a href='https://www.facebook.com/adibfhanna'>Adib </a></p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Buy
    </div>
                </div>
                <br />
                <div className="catCard">
                    <div className="content">
                        <div className="header">Description Of Service</div>
                        <div className="description">
                            <p>By <a href='https://www.facebook.com/will.harris'>Will</a> </p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Buy
    </div>
                </div>
            </div>


        );
    }
}

export default CatCard;