import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import "./Main.css"

const Main = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&key=AIzaSyAh4Pt2lTUPreQSLVbXnmKDnKogwdWqApM&key=AIzaSyAh4Pt2lTUPreQSLVbXnmKDnKogwdWqApM"
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items)
      })
  }, [])

  return (
    <>
      <SearchBar />
      <VideoList videoList={videos} />
    </>
  )
}

export default Main
