import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="ui left sidebar">
                    <a href='/tech'>
                        Tech
    </a>
    <br/>
                    <a href="/business">
                        Business
    </a>
    <br/>
                    <a href="/visualarts">
                        Visual Arts
    </a>
    <br/>
                </div>
                <div className="pusher">

                </div>
          </div>
        );
    }
}

export default SideNav;