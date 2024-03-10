import React, { useState } from 'react'
import Menu from './Menu';

function NavBar({ menuOpen, handleMenu }) {

    return (
        <div className='w-full h-16 bg-white fixed top-0 z-20 text-black'>
            <div className='py-2.5 px-7 flex items-center justify-between'>
                <div className='flex items-center'>
                    <a href="#intro" className='text-4xl font-bold mr-9'>Prakash</a>
                    <div className='flex items-center ml-7'>
                        <div className='text-lg mr-2'><i className="fa-solid fa-user"></i></div>
                        <span>+91 9014433215</span>
                    </div>

                    <div className='flex items-center ml-7'>
                        <div className='text-lg mr-2'><i className="fa-solid fa-envelope"></i></div>
                        <span>bhanu123@gmail.com</span>
                    </div>
                </div>

                <div>
                    <div className='text-4xl cursor-pointer' onClick={handleMenu}>{
                        menuOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>
                    }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar
