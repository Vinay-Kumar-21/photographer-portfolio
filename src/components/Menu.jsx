import React from 'react'

function Menu({ menuOpen, handleMenu }) {
    return (
        <div onClick={handleMenu}>{
            menuOpen ? <div className='w-80 h-screen bg-white text-black fixed top-0 right-0 z-10 flex flex-col items-center justify-center'>
                <ul className='m-0 p-0 text-3xl'>
                    <li className='mb-4'>
                        <a href='#intro' className='hover:font-semibold'>Home</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#portfolio' className='hover:font-semibold'>Portfolio</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#works' className='hover:font-semibold'>Works</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#testimonials' className='hover:font-semibold'>Testimonials</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#contact' className='hover:font-semibold'>Contact</a>
                    </li>
                </ul>
            </div> : ""
        }</div>

    )
}

export default Menu
