import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <form class="form-inline">
                <input class="form-control mr-sm-2" id="nameSearch" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
        );
    }
}

export default SearchBar