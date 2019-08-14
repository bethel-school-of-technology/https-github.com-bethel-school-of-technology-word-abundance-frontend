import React, { Component } from 'react';
import Landing from './Landing';
import PostList from '../Posts/PostList';

class Home extends Component {
    render() {
        return (
            <div id='homeBody'>
                <br />
                <br />
                <br />            
                <div class="ui fluid segment">
                    <Landing /> 
                    <h3 class="ui header">Abundant</h3>
                    <p>Your Community Starts Here.</p>
                     <div class="ui fading segment">
                    <PostList />
                </div>
             </div>   
            </div>
        );
    }
}

export default Home;