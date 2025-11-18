import React from 'react'
import Video from './video'


const HomeTopText = () => {
    return (
        <div className='font-semi-bold  mt-72 text-white lg:mt-0 pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                qui
                <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-3">
                    <Video />
                </div>
                génère
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeTopText