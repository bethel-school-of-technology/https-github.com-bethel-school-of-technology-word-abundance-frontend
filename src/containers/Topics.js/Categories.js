import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div class="ui segments">
  <div class="ui segment">
    <p>Offered by our Community</p>
  </div>
  <div class="ui segments">
    <div class="ui segment">
      <p>This Week</p>
    </div>
    <div class="ui segment">
      <p>Profiled</p>
    </div>
    <div class="ui segment">
      <p>Events</p>
    </div>
  </div>
  <div class="ui segment">
  <a href='/maintenance'> <p>Maintenance</p> </a>
  </div>
  <div class="ui horizontal segments">
    <div class="ui segment">
     <a href='/entertainment'> <p>Entertainment</p> </a>
    </div>
    <div class="ui segment">
    <a href='/business'> <p>Business</p> </a>
    </div>
    <div class="ui segment">
    <a href='/tech'> <p>Tech</p> </a>
    </div>
  </div>
  <div class="ui segment">
  <a href='/creative'> <p>Creative</p> </a>
  </div>
</div>
            </div>
        );
    }
}

export default Categories;