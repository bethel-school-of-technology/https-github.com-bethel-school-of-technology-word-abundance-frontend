import React, { Component } from 'react';
import Landing from './Landing';
// import { Jumbotron, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <Landing />
            </div>
        );
    }
}

// return (
//     <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <h1 className="display-3">Fluid jumbotron</h1>
//           <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// };

export default Home;