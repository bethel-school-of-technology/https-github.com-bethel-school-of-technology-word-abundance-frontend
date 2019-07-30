import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        return (
            <div>
                <br/>
                <Button color="primary" onClick={this.toggle}>Product Categories</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <h3>Product Categories</h3>
                    <ul>
                        <li><a href="/maintenance">Maintenance</a></li>
                        <li><a href="/Tech">Tech</a></li>
                        <li><a href="/VisualArts">Visual Arts</a></li>
                        <li><a href="/Music">Music</a></li>
                        <li><a href="/BusinessServices">Business</a></li>
                        <li><a href="/Administration">Administrative</a></li>
                    </ul>
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};





export default SideNav;