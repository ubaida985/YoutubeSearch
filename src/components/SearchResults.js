import React from "react";
import VideoItem from "./VideoItem";

const SearchResults = (props) => {
    let count = 0;
    const renderedList = props.searchResults.map(
        (video) => {
            if (count === 0) {
                count = 1;
                return null;
            }
            return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video} />
        }
    )

    return <div>{renderedList}</div>;
}

export default SearchResults;