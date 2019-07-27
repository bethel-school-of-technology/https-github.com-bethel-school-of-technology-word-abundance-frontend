import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
   <div className="uiCards">
    <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
      <div className="header">
        Elliot Fu
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <br/>
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src="/images/avatar/large/jenny.jpg"/>
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
        /* //     <div className="ui card">
        //         <div className="content">
        //             <div className="header">Service</div>
        //         </div>
        //         <div className="content">
        //             <h4 className="ui sub header">Description</h4>
        //             <div className="ui small feed">
        //                 <div className="event">
        //                     <div className="content">
        //                         <div className="summary">
        //                             Posted by <a>Olivia</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="event">
        //                     <div className="content">
        //                         <div className="summary">
        //                             <a>Olivia</a> as <a>Administrator</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="event">
        //                     <div className="content">
        //                         <div className="summary">
        //                             <a>Olivia</a> added two pictures
        //   </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="extra content">
        //             <button className="ui button">Buy</button>
        //         </div>
        //     </div> */
        );
    }
}

export default Card;