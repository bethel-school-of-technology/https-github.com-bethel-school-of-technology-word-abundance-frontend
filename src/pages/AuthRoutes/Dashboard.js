import React, { Component } from 'react';
import {Tab, Col, Nav, Row} from 'react-bootstrap';
import Profile from './Profile';
import Blog from './Blog';
import Options from "./Options";
import Header from './Header';

class Dashboard extends Component {
    render() { 
        return (
        <React.Fragment>
            <Header />
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
                <Nav.Link eventKey="second">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="third">Options</Nav.Link>
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
 
export default Dashboard;