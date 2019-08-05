import React, { Component } from 'react';
import {Tab, Col, Nav, Row} from 'react-bootstrap';
import Profile from './Tabs/Profile';
import Blog from './Tabs/Blog';
import Options from "./Tabs/Options";
import requireAuth from '../../../requireAuth'
import MyProductsService from './Tabs/Products_Service';

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
                <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">My Products/Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="fourth">Options</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <MyProductsService />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Blog />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
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