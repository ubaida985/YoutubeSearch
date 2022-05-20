import React from "react";

import "../css/SearchBar.css"

class SearchBar extends React.Component {

    state = { searchTerm: "" };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //passing the search term to the onFormSubmit property in the searchbar(in App.js)
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    onChange={this.onInputChange}
                    value={this.state.searchTerm}

                    name="SearchBar"
                    id="searchBar"
                    className="searchBar"
                    placeholder="Search Videos"
                />
            </form >
        );
    }
}

export default SearchBar;