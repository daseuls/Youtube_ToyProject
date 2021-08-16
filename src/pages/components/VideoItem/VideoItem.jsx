import React from "react"
import styled from "styled-components"

export default function VideoItem({ video: { snippet } }) {
  return (
    <Container>
      <Video>
        <Thumbnail src={snippet.thumbnails.medium.url} alt="thumbnail" />
        <MetaData>
          <Title>{snippet.title}</Title>
          <Channel>{snippet.channelTitle}</Channel>
        </MetaData>
      </Video>
    </Container>
  )
}

const Container = styled.li`
  width: 50%;
  padding: 0.2em;
`
const Video = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  cursor: pointer;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.53);
  transition: transform 250ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
`
const Thumbnail = styled.img`
  width: 40%;
  height: 100%;
`

const MetaData = styled.div`
  margin-left: 0.2em;
`
const Title = styled.p`
  margin: 0;
  font-size: 0.8rem;
`

const Channel = styled.p`
  margin: 0;
  font-size: 0.6rem;
`
