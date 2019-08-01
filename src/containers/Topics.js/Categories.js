import React, { Component } from 'react';

class Categories extends Component {

    // constructor(props) {
    //     super(props);

    //     // creating a ref to store the textInput DOM element
    //     this.myRef = React.createRef();
    // }
    // focusTextInput() {
    //     this.focusTextInput.current.focus();
    // }

  render() {
    return (
        
    //   <div className="ui placeholder segment">
    //     <div className="ui two column stackable center aligned grid">
    //       <div className="ui vertical divider">Or</div>
    //       <div className="middle aligned row">
    //         <div className="column">
    //           <div className="ui icon header">
    //             <i className="search icon"></i>
    //             Find Service
    //     </div>
    //           <div className="field">
    //             <div className="ui search">
    //               <div className="ui icon input">
    //                 <input className="prompt" type="text" placeholder="Search services..." />
    //                 <i className="search icon"></i>
    //               </div>

    //               <div className="results"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="ui icon header">
    //             <i className="plus icon"></i>
    //             Add New Service
    //     </div>
    //           <div className="ui secondary button">
    //             <a href='/createService'>Create</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

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
          <div className="ui segment">
            <a href='/maintenance'> <p>Maintenance</p> </a>
          </div>
          <div className="ui horizontal segments">
            <div className="ui segment">
              <a href='/entertainment'> <p>Entertainment</p> </a>
            </div>
            <div className="ui segment">
              <a href='/business'> <p>Business</p> </a>
            </div>
            <div className="ui segment">
              <a href='/tech'> <p>Tech</p> </a> 
            </div>
          </div>
          <div className="ui segment">
            <a href='/creative'> <p>Creative</p> </a>
          </div>
        </div>
    //   </div>
     
    );
  
  }
}

export default Categories;