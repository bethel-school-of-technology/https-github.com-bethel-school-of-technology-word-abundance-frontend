import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);

    // creating a ref to store the textInput DOM element
    this.myRef = React.createRef();
  }
  focusTextInput() {
    this.focusTextInput.current.focus();
  }

  render() {
    return (

      <main>

        <div className='magnify'>
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className="middle aligned row">
                <div className="column">
                  <div className="ui icon header">
                    <i className="search icon"></i>

                    Find Service
        </div>
                  <div className="field">
                    <div className="ui search">
                      <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search services..." />
                        <i className="search icon"></i>
                      </div>

                      <div className="results"></div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui icon header">
                    <i className="plus icon"></i>
                    Add New Service
        </div>
                  <div className="ui secondary button">
                    <a href='/createService'>Create</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='marketgrid'>
          <div classNameName="ui placeholder segment">
            <div className="ui segments">
              <div className="ui segment">
                <p>Offered by our Community</p>
              </div>
              <div className="ui segments">
                <div className="ui segment">
                  <p>New This Week</p>
                </div>
                <div className="ui segment">
                  <p>Profiled</p>
                </div>
                <div className="ui segment">
                  <p>Events</p>
                </div>
              </div>


              <div className="ui three column grid">
                <div className="column">
                  <div className="ui segment">
                   <a href='/TechLanding'><p>Tech Services</p></a> 
                    {/* <img src='../../images/hands.jpg' alt='myPhoto1' class='responsive'/> */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Maintenance Services</p>
                    {/* <img src='../../images/abundant.jpg' alt='myPhoto2' class='responsive'/> */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Health & Beauty </p>
                    {/* <img src='/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/CommunityNew.jpg' alt='myPhoto3' class='responsive'/>       */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Business Professionals</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto4' class='responsive'/> */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Arts and Music</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto5' class='responsive'/>    */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Lessons</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto6' class='responsive'/>       */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Finance Solutions</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto7' class='responsive'/> */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Start ups</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto8' class='responsive'/>    */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Pet Care</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto9' class='responsive'/>       */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Volunteer opportunities</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto10' class='responsive'/> */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Jobs</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto11' class='responsive'/>    */}
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment">
                    <p>Add to the list!</p>
                    {/* <img src='src/images/hands.jpg' alt='myPhoto12' class='responsive'/>       */}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    );

  }
}

export default Categories;