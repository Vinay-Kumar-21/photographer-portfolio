import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Photographer", "Graphic Designer", "Animation Designer"]
        });
    }, [])
    return (
        <div className='bg-black w-screen h-screen -top-[70px] flex' id='intro'>
            <div className=' basis-6/12  overflow-hidden flex items-center ml-3 mb-3'>
                <div className='w-600 h-4/5'>
                    <img src='./assets/bhanuport.webp' alt='hero' className='rounded-2xl rounded-b-2xl' />
                </div>
            </div>
            <div className='basis-6/12  text-white relative'>
                <div className='w-full h-full pl-12 flex flex-col justify-center'>
                    <h2 className='text-3xl'>Hi There, I'm</h2>
                    <h1 className='text-6xl my-2.5'>Prakash</h1>
                    <h3 className='text-3xl'>Freelance <span className='text-amber-300' ref={textRef}></span></h3>
                </div>
            </div>

        </div>
    )
}

export default Intro
