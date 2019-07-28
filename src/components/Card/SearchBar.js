import React from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="ui fluid selection dropdown">
                <i className="dropdown icon"></i>
                <span className="default text">Select Type</span>
                <div className="menu">
                    <div className="item">
                        <i className="attention right floated icon"></i>
                        New
    </div>
                    <div className="item">
                        <i className="comment right floated icon"></i>
                        Favourites
    </div>
                    <div className="item">
                        <i className="conversation right floated icon"></i>
                        Discussion
    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;