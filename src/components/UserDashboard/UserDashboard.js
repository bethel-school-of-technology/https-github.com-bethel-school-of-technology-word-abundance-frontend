import React, { Component } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import requireAuth from "../auth/requireAuth";
import Blog from "../Blog/BlogTab";
import FileUploader from './Tabs/FileUploader'

import ProductsDEMO from './Tabs/ProductDEMO';
import ServiceDEMO from './Tabs/ServiceDEMO';
//import MyProductsService from "./Tabs/Products_Service";
//import Main from "./Tabs/Main";
//import Options from "./Tabs/Options";


class UserDashboard extends Component {
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
                        <Nav.Link eventKey="first">My Blog</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Add Product</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Add Service
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">File Uploader</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                      <Blog />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <ProductsDEMO />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <ServiceDEMO />
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <FileUploader />
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

export default requireAuth(UserDashboard);
