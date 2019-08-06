import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <Tabs defaultActiveKey="completedorders" id="uncontrolled-tab-example">
                <Tab eventKey="completedorders" title="View Completed Orders">
                </Tab>
                </Tabs>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis dignissim, ullamcorper eros et, pretium odio. Sed nec magna eu leo porta tincidunt vel id felis. Mauris sed sapien mollis, blandit eros at, hendrerit dolor. Pellentesque mattis iaculis lorem, sed egestas est ultricies at. Quisque efficitur vulputate felis eu suscipit. Proin eget euismod tellus. Mauris sit amet rhoncus lorem, suscipit dictum ex.</p>
            </React.Fragment>
            /* Add New Products/Services */
        );
    }
}
 
export default Orders;