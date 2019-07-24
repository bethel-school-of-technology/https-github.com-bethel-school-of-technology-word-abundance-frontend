import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <br />
                <p id='contact'>Contact </p>
            </div>
        );
    }
}

// constructor() {
//     super();
//     this.state = {
//         search: ''
//     };
// }
// updateSearch(event) {
//     this.setState({search: event.target.value.substr(0,
//         20)});
// }
// render() {
//     let filteredContacts = this.props.contacts;
//     return (
//         <div>

//         <ul>
//             {filteredContacts.map.((contact)=> {
//                 return <Contact contact={contact}
//                 key={contact.id}/>
//             })}
//         </ul>
//             <input type='text'
//             value={this.state.search}
//             onChange={this.updateSearch.bind(this)}/>


export default Contact;