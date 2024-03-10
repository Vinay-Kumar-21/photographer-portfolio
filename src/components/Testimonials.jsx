import React from 'react'

function Testimonials() {
    const data = [
        {
            id: "0",
            image: "./assets/vk.webp",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur.",
            name: "Vinay"
        },
        {
            id: "1",
            image: "",
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur.",
            name: "Roshni"
        },
        {
            id: "2",
            image: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus mi tristique convallis consectetur.",
            name: "Abdul"
        }
    ]
    return (
        <div className='bg-gray-400 w-screen h-screen -top-[70px] text-white flex flex-col items-center ' id='testimonials'>
            <h1 className='text-4xl font-extrabold mt-5'>Testimonials</h1>
            <div className='w-full h-full flex items-center justify-center'>
                {data.map(p => (
                    <div className='w-64 h-4/6 rounded-xl shadow-black flex flex-col justify-around p-5 bg-white'>
                        <div className='flex items-center justify-center'>
                            <img src={p.image} className='h-20 w-20 rounded-half object-cover mx-7' />
                            <img src='./assets/yt.png' className='h-6' />
                        </div>
                        <div className='p-2.5 bg-gray-400 rounded-2xl'>
                            {p.description}
                        </div>
                        <div className='flex items-center flex-col'>
                            <h3 className='text-black mb-1.5'>{p.name}</h3>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Testimonials
