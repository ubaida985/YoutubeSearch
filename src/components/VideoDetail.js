import React from "react";

const VideoDetail = (props) => {
    if (!props.selectedVideo) {
        return <div>Loading...</div>;
    }
    const videoSrc = "https://www.youtube.com/embed/" + props.selectedVideo.id.videoId;
    return (
        <div className="selectedContainer">
            <div className="videoContainer">
                <iframe title="Video Player" src={videoSrc} allowFullScreen />
            </div>
            <div className="contentContainer">
                <h4>{props.selectedVideo.snippet.title}</h4>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;