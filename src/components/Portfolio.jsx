import React from 'react'
import PortfolioList from './PortfolioList'

function Portfolio() {
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "food",
            title: "Food"
        },
        {
            id: "wedding",
            title: "Wedding"
        },
        {
            id: "graphic",
            title: "Graphic"
        },
        {
            id: "animation",
            title: "Animation"
        }
    ];

    return (
        <div className='bg-white w-screen h-screen -top-[70px] flex flex-col items-center mt-4' id='portfolio'>
            <h1 className='text-5xl'>Portfolio</h1>
            <ul className='mx-2.5 flex '>
                {
                    list.map((item) => (
                        < PortfolioList title={item.title} />
                    ))
                }
            </ul>

            <div className='w-4/6 flex items-center justify-center flex-wrap '>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5 relative flex items-center justify-center transition-all cursor-pointer hover:bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-index-0'></img>
                    <h3 className='absolute text-xl text-white'>Featured</h3>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5 relative flex items-center justify-center transition-all cursor-pointer hover:bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReX5TK98RqHQXpnq-eez4v853SB9N6HBykOw&usqp=CAU' alt='food' className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-index-0'></img>
                    <h3 className='absolute text-xl text-white'>Food</h3>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5 relative flex items-center justify-center transition-all cursor-pointer hover:bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-h8HuTomPkK1-T5M4jdOa2ZLlDvjdTX1P-w&usqp=CAU' alt='food' className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-index-0'></img>
                    <h3 className='absolute text-xl text-white'>Wedding</h3>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5 relative flex items-center justify-center transition-all cursor-pointer hover:bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xKF8XPRyXmFvARYO0Mvp2I7vrGb5ZIDarpiobukBOUwGkWNdbzaGnpBqq9FukomVpPc&usqp=CAU' alt='food' className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-index-0'></img>
                    <h3 className='absolute text-xl text-white'>Graphic Design</h3>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5 relative flex items-center justify-center transition-all cursor-pointer hover:bg-gray-500'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vXe25ORs8DWUda0fWHmqCapoKRXTzENMVg&usqp=CAU' alt='food' className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-index-0'></img>
                    <h3 className='absolute text-xl text-white'>Animation</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
