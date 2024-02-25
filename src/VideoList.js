import React from "react";
import { Link } from "react-router-dom";

function VideoList() {
  const data = [
    // Sample hardcoded data
    {
      id: 1,
      url: "YN76Wa4GO_Y", // YouTube video ID
    },
    {
      id: 2,
      url: "7pFx4iXcM18", // YouTube video ID
    },
    {
      id: 3,
      url: "CVfnisGYeCM", // YouTube video ID
    },
    {
      id: 4,
      url: "https://youtube.com/shorts/OIzeP6drcEY?si=s2xphB1oz1T2_Hhx",
    },
    {
      id: 5,
      url: "https://youtube.com/shorts/KnlH7IW9mAQ?si=5Vc0MgekYl0LNxkL",
    },
    // Add more sample data if needed
  ];

  // Select one video randomly
  const selectedItem = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="video-list">
      <h2>Video List</h2>
      {selectedItem && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "300px",
          }}
        >
          <div
            key={selectedItem.id}
            style={{
              margin: "10px",
            }}
          >
            <Link to={`/videos/${selectedItem.id}`}>
              <img
                src={`https://img.youtube.com/vi/${selectedItem.url}/default.jpg`}
                alt={`Video ${selectedItem.id}`}
                style={{ width: "300px", cursor: "pointer" }}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoList;
