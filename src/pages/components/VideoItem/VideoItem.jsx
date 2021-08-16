import React from "react"

export default function VideoItem(props) {
  // console.log(props.url)
  return (
    <li>
      <img src={props.thumbnail.url} alt="thumbnail" />
      <p>{props.title}</p>
      <p>{props.channelTitle}</p>
    </li>
  )
}
