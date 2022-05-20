import React from "react";

import "../css/videoList.css";

const VideoItem = (props) => {

    const videoThumbnail = props.video.snippet.thumbnails.default.url;
    const videoTitle = props.video.snippet.title;

    return (
        <div onClick={() => { props.onVideoSelect(props.video) }}>
            <img src={videoThumbnail} alt={videoTitle} />
            <h5>{videoTitle}</h5>
        </div>
    );
}

export default VideoItem;