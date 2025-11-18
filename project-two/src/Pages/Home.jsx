import React from 'react'
import Video from '../Components/Home/video'
import HomeTopText from '../Components/Home/hometoptext'
import HomeDownText from '../Components/Home/homedowntext'

const Home = () => {
  return (
    <div>
      <div className= "h-screen w-screen fixed">
        <Video />
      </div>
      <div className='h-screen w-screen relative overflow-hidden pb-5 flex flex-col justify-between'>
          <HomeTopText />
          <HomeDownText />
      </div>
    </div>
  )
}

export default Home
