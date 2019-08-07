import React, { Component } from 'react';
import {Tab, Col, Nav, Row} from 'react-bootstrap';
import Profile from './Tabs/Profile';
import Blog from '../Blog/BlogTab';
import Options from "./Tabs/Options";
import requireAuth from '../requireAuth'
import MyProductsService from './Tabs/Products_Service';
import Orders from './Tabs/Orders';

class Dashboard extends Component {
    render() { 
        return (
        <React.Fragment>
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">My Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">My Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">My Products/Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">My Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fifth">Options</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Blog />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <MyProductsService />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <Orders />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                <Options />
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
            </Tab.Container>
            </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default requireAuth(Dashboard);