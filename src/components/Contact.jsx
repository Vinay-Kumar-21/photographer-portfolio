import React, { useState } from 'react'

function Contact() {
    const [msg, setMsg] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(true);
    }
    return (
        <div className='bg-gray-500 w-screen h-screen -top-[70px] flex' id='contact'>

            <div className='w-3/6 overflow-hidden mt-7'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR652u6y3CwwZT_aImolXi8FqFhOeR2w6V7rCWVtrHfE45nVV-8ElFmW2rXgB8oJvNTu54&usqp=CAU' className='w-5/6 h-4/5 mx-4 mt-5 rounded-3xl' />
            </div>
            <div className='w-3/6 flex flex-col items-center justify-center'>
                <h2 className='text-3xl'>Contact</h2>
                <form className='w-8/12 h-4/6 flex flex-col items-center justify-around' onSubmit={handleSubmit}>
                    <input type='text' placeholder='eMail' className='w-80 h-8 text-xl' />
                    <textarea placeholder='Message' className='w-80 h-52 text-xl'></textarea>
                    <button type='submit' className='h-8 w-36 text-white bg-black rounded-lg font-bold cursor-pointer'>Send</button>
                    {msg && <span className='text-white'>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
