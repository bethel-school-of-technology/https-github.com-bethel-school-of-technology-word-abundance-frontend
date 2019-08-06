import React, { Component } from 'react';
import Landing from './Landing';
import PostList from '../Posts/PostList';

class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <Landing />
                
                <div class="ui fluid segment">
                    <h3 class="ui header">Abundant</h3>
                    <p>Our mission is to join entrepreneurs around the world to bring quality marketing and digital edge to the communities who work so hard to bring us value.</p>
                    <p>content content content content content content content content content content content.</p>
                    <p>content content content content content content content content content content content content.</p>
                </div>
                <div class="ui fading segment">
                    <PostList />
                </div>
               
            </div> 
        );
    }
}

export default Home;