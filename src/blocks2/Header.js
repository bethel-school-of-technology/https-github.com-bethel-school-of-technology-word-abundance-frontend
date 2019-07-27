import React from 'react';
// import { Navbar, NavItem} from 'react-materialize';

class Header extends React.Component {
    render (){
        return (
            <nav className='navbar navbar-default'>
                <div className='containter'>
                    <div className='navbar-header'>
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;