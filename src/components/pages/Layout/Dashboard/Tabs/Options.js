import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <Tabs defaultActiveKey="updateuandp" id="uncontrolled-tab-example">
                <Tab eventKey="updateuandp" title="Update Username & Password">
                </Tab>
                <Tab eventKey="updateaddress" title="Update Address">
                </Tab>
                </Tabs>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis dignissim, ullamcorper eros et, pretium odio. Sed nec magna eu leo porta tincidunt vel id felis. Mauris sed sapien mollis, blandit eros at, hendrerit dolor. Pellentesque mattis iaculis lorem, sed egestas est ultricies at. Quisque efficitur vulputate felis eu suscipit. Proin eget euismod tellus. Mauris sit amet rhoncus lorem, suscipit dictum ex.</p>
            </React.Fragment>
        );
    }
}
 
export default Options;