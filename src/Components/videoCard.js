import React from 'react'
import "./videocard.css"
const VideoCard = (video) => {
  return (
    <div className='videocard' key={video.video.snippet.id} >
        <img src={video.video.snippet.thumbnails.medium.url}/>
        <div >
        <h4>{video.video.snippet.channelTitle.slice(0,4)}</h4>
        <h5>{video.video.snippet.title.slice(0,10)}</h5>
        </div>
       
    </div>
  )
}

export default VideoCard