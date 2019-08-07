import React from 'react';

class Profile extends React.Component {
 
    render() { 
        return (  
            <React.Fragment>
                  {/* Display ProfilePic from Firebase */}
                {/* Display Phone Number, Address, State, Country from MongoDB */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id turpis dignissim, ullamcorper eros et, pretium odio. Sed nec magna eu leo porta tincidunt vel id felis. Mauris sed sapien mollis, blandit eros at, hendrerit dolor. Pellentesque mattis iaculis lorem, sed egestas est ultricies at. Quisque efficitur vulputate felis eu suscipit. Proin eget euismod tellus. Mauris sit amet rhoncus lorem, suscipit dictum ex.</p>
            </React.Fragment>
            
        );
    }
}
 
export default Profile;