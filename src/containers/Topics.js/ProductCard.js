import React, { Component } from 'react'

class ProductCard extends Component {
    render() {
        return (

       
            <div className="ui cards raised-card">

                <div className="ProductCard">
                    <div className="content">
                        <div className="header">Product Description</div>
                        <div className="description">
                            <p>By <a href='Tech'>Olivia</a></p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Add To Cart
    </div>
                </div>
                <br />
                <div className="ProductCard">
                    <div className="content">
                        <div className="header">Product Description</div>
                        <div className="description">
                            <p>By <a href='https://www.facebook.com/adibfhanna'>Adib </a></p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Add To Cart
    </div>
                </div>
                <br />
                <div className="ProductCard">
                    <div className="content">
                        <div className="header">Product Description</div>
                        <div className="description">
                            <p>By <a href='https://www.facebook.com/will.harris'>Will</a> </p>
                        </div>
                    </div>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Add To Cart
    </div>
                </div>
            </div>


        );
    }
}

export default ProductCard;