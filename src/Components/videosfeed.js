import React from "react";
import VideoCard from "./videoCard";
import "./videosfeed.css";
const VideosFeed = (video) => {
    console.log("called");
  return (
    <div 
     className="videosfeed">
      {
   video.video.map((item,idx)=>(
    <VideoCard  key={idx} video={item}/>
   ))
      }
    </div>
  );
};

export default VideosFeed;
