import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useSwipeable } from "react-swipeable";
import "./Assests/Player.css";

function Videoplayer() {
  const { id } = useParams();
  const [data, setData] = useState([
    // Sample hardcoded data
    {
      id: 1,
      title: "Sample Video 1",
      url: "YN76Wa4GO_Y", // YouTube video ID
    },
    {
      id: 2,
      title: "Sample Video 2",
      url: "7pFx4iXcM18", // YouTube video ID
    },
    {
      id: 3,
      title: "video 3",
      url: "CVfnisGYeCM",
    },
    {
      id: 4,
      url: "OIzeP6drcEY",
    },
    {
      id: 5,
      url: "KnlH7IW9mAQ",
    },
    // Add more sample data if needed
  ]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const playerRef = useRef(null);

  useEffect(() => {
    if (data.length > 0) {
      const selectedVideoIndex = data.findIndex(
        (video) => video.id.toString() === id
      );

      if (selectedVideoIndex !== -1) {
        setSelectedVideo(data[selectedVideoIndex]);
      } else {
        setSelectedVideo(null);
      }
    }
  }, [data, id]);

  const handleNextVideo = () => {
    if (selectedVideo) {
      const nextVideoIndex =
        (data.findIndex((video) => video.id === selectedVideo.id) + 1) %
        data.length;
      const nextVideoId = data[nextVideoIndex].id;
      navigate(`/videos/${nextVideoId}`);
    }
  };

  const handlePrevVideo = () => {
    if (selectedVideo) {
      let prevVideoIndex =
        (data.findIndex((video) => video.id === selectedVideo.id) - 1) %
        data.length;

      // Ensure positive index
      if (prevVideoIndex < 0) {
        prevVideoIndex = data.length - 1;
      }

      const prevVideoId = data[prevVideoIndex].id;
      navigate(`/videos/${prevVideoId}`);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextVideo,
    onSwipedRight: handlePrevVideo,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    playerRef.current = event.target;
    playerRef.current.playVideo(); // Automatically start playing the video
  };

  return (
    <div className="video-player" {...handlers}>
      {selectedVideo ? (
        <>
          <h2>{selectedVideo.title}</h2>
          <YouTube
            className="youtube-player"
            videoId={selectedVideo.url}
            onReady={onReady}
            opts={{
              playerVars: {
                autoplay: 1,
                width: "100%",
                height: "300px",
              },
            }}
          />
          <div className="button-group">
            <button onClick={() => playerRef.current.pauseVideo()}>Puse</button>
            <button onClick={() => playerRef.current.playVideo()}>Play</button>
            <button onClick={handlePrevVideo}>&#8592; Previous</button>{" "}
            {/* Unicode for left arrow */}
            <button onClick={handleNextVideo}>Next &#8594;</button>{" "}
            {/* Unicode for right arrow */}
          </div>
        </>
      ) : (
        <div>Video not found</div>
      )}
    </div>
  );
}

export default Videoplayer;
