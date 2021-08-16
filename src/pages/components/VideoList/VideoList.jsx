import React from "react"
import VideoItem from "../VideoItem/VideoItem"
import styled from "styled-components"

const VideoList = (props) => {
  // console.log("썸네일", props.videoList[0].snippet.thumbnails.medium.url)
  return (
    <Videos>
      {props.videoList.map((item) => {
        return <VideoItem key={item.id} video={item} />
      })}
    </Videos>
  )
}

export default VideoList

const Videos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`
