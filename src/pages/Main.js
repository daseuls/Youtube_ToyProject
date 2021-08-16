import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar/SearchBar"
import VideoList from "./components/VideoList/VideoList"
import "./Main.css"

const Main = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyAh4Pt2lTUPreQSLVbXnmKDnKogwdWqApM&maxResults=25&key=AIzaSyAh4Pt2lTUPreQSLVbXnmKDnKogwdWqApM"
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items)
      })
      .catch((error) => console.log("error", error))
  }, [])
  console.log(videos)
  return (
    <>
      <SearchBar />
      <VideoList videoList={videos} />
    </>
  )
}

export default Main
