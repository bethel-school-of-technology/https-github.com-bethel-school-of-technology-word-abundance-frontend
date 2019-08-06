import React, { Component } from 'react';
import Notifications from './Notifications';
// import PostList from '../Posts/PostList';
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container'>
                <div className='row'>
                    {/* <PostList/> */}
                    <div className="col s12 m6">
                        <div className="col s12 m5"></div>
                        <div className="col s12 m5 offset-m1"></div>
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;