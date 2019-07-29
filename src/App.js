import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import { 
    BrowserRouter as Router, Route 
} from 'react-router-dom';

import {
    Home,
    About,
    Contact,
    Marketplace,
} from './pages';

import { 
    shoppingCart
} from './actions/shoppingCart';

import Navbar from './containers/Navbar';
import Tech from './pages/UserService.js/Tech';
import Card from './components/Card';
import SignUp from './actions/SignUp';

// import Button from './components/Card/Button';



// import SideNavPage from './pages/Layout/SideNavPage';





// import {
//     FloatSearch
// } from './components/Card/FloatSearch';




import { Landing } from './pages/Layout/Landing'



// import CategoryList from './Components/CategoryList';
// import Product from './Components/Product';
// import Service from './Components/Service';
// import Orders from './Components/Orders';

const App = () =>
    (
        <Router>
            <div>
                <Navbar />
                <br />
                <Route exact path='/' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/About' component={About} />
                <Route path='/Marketplace' component={Marketplace} />
                <Route path='/Tech' component={Tech} />
                <Route path='/Card' component={Card} />
                <Route path='/shoppingCart' component={shoppingCart} />
                <Route path='/signup' component={SignUp} />
                {/* <Route path='/button' component={Button} /> */}

                {/* <Route path='/SideNavPage' component={SideNavPage} /> */}

                

{/* <Route path='/Landing' component={Landing} /> */}
                



                {/* <Route path='/categories' component={CategoryList} />
                <Route path='/product' component={Product} />
                <Route path='/service' component={Service} />
                <Route path='/orders' component={Orders} />  */}

            </div>
        </Router>
    );

ReactDOM.render(<App />, document.getElementById('root'));

export default App;