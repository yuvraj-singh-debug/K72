import React from 'react'

const Video = () => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      src="/videos/video.mp4"
    />
  )
}

export default Video
