import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import VideoDetail from "./VideoDetail";

import YoutubeData from "../api/YoutubeData";

import "../css/main.css"
import "../css/selectedVideo.css"

class App extends React.Component {

    state = { searchResults: [], selectedVideo: null };

    componentDidMount() {
        this.onFormSubmit('Data Structures in Java');
    }

    onFormSubmit = async (searchTerm) => {
        const response = await YoutubeData.get("/search", {
            params: {
                q: searchTerm
            }
        });

        this.setState({
            searchResults: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div>
                <div className="searchBarContainer">
                    <SearchBar onFormSubmit={this.onFormSubmit} />
                </div>
                <div className="mainContainer">
                    <div className="selectedVideo">
                        <VideoDetail selectedVideo={this.state.selectedVideo} />
                    </div>
                    <div className="searchResults">
                        <SearchResults className="item" onVideoSelect={this.onVideoSelect} searchResults={this.state.searchResults} />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;