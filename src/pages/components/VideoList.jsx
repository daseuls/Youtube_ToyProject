import React from "react"
import Video from "./Video"

const VideoList = (props) => {
  // console.log("썸네일", props.videoList[0].snippet.thumbnails.medium.url)
  return (
    <>
      {props.videoList.map((item) => {
        return (
          <Video
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.medium}
            channelTitle={item.snippet.channelTitle}
          />
        )
      })}
    </>
  )
}

export default VideoList
