import React, { Component } from 'react'
import { Search, Button } from '../components'
import './style.css';

class SearchBar extends Component {
    render() {
        return (
            <div className='SearchBar'>
                <h1>SearchBar Container</h1>
                <Search />
                <Button />
            </div>

        );
    }
}

export default SearchBar;