import React, { useState } from 'react'

function Works() {
    const [slider, setSlider] = useState(0);
    const data = [
        {
            id: "0",
            title: "Food",
            image: "./assets/bp20.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur."
        },
        {
            id: "1",
            title: "Wedding",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-h8HuTomPkK1-T5M4jdOa2ZLlDvjdTX1P-w&usqp=CAU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur."
        },
        {
            id: "2",
            title: "Graphic Design",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xKF8XPRyXmFvARYO0Mvp2I7vrGb5ZIDarpiobukBOUwGkWNdbzaGnpBqq9FukomVpPc&usqp=CAU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur."
        },
        {
            id: "3",
            title: "Animation",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vXe25ORs8DWUda0fWHmqCapoKRXTzENMVg&usqp=CAU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur."
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setSlider(slider > 0 ? slider - 1 : 3) : setSlider(slider < data.length - 1 ? slider + 1 : 0)
    }
    return (
        <div className='bg-gray-500 w-screen h-screen -top-[70px] flex items-center justify-center relative' id='works'>
            <div className='h-80 flex absolute left-0' style={{ transform: `translateX(-${slider * 100}vw)`, transition: 'all 1s ease-out' }}>{
                data.map(d => (
                    <div className='w-screen flex items-center justify-center'>
                        <div className='w-700 h-full bg-white rounded-3xl flex items-center justify-center'>
                            <div className='w-3/6  h-5/6 flex items-center justify-center'>
                                <div className='h-4/6 w-5/6 flex flex-col justify-between'>
                                    <div className='w-10 h-10 rounded-half bg-coral flex items-center justify-center'>
                                        <img src='./assets/camlogo.png' className='w-9' />
                                    </div>
                                    <h2 className='text-2xl'>{d.title}</h2>
                                    <p className='text-sm'>{d.description}</p>
                                    <span className='text-xs font-extrabold underline cursor-pointer'>Projects</span>
                                </div>
                            </div>
                            <div className='  h-full flex items-center justify-center overflow-hidden'>
                                <img src={d.image} className='w-96 h-full -rotate-12' />
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className='h-20 absolute left-24 cursor-pointer text-white text-5xl' onClick={() => handleClick("left")}>
                <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className='h-20 absolute right-24 cursor-pointer text-white text-5xl' onClick={() => handleClick("")}>
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

export default Works
