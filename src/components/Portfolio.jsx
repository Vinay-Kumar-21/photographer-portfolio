import React from 'react'

function Portfolio() {
    return (
        <div className='bg-white w-screen h-screen -top-[70px] flex flex-col items-center mt-4' id='portfolio'>
            <h1 className='text-5xl'>Portfolio</h1>
            <ul className='mx-2.5 flex '>
                <li className='text-xl mr-5 p-1.5'>Featured</li>
                <li className='text-xl mr-5 p-1.5'>Photography</li>
                <li className='text-xl mr-5 p-1.5'>Logo Design</li>
                <li className='text-xl mr-5 p-1.5' >Graphic Design</li>
                <li className='text-xl mr-5 p-1.5'>Arts</li>
            </ul>
            <div className='w-4/6 flex items-center justify-center flex-wrap relative'>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover'></img>
                    <h3>Food</h3>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover'></img>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover'></img>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover'></img>
                </div>
                <div className='w-52 h-36 rounded-2xl my-2.5 mx-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCK4UvQtFhioRHellP6R_FX2lchucLtKdtg&usqp=CAU' alt='food' className='w-full h-full object-cover'></img>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
