import React from 'react'

function PortfolioList({ title }) {
    return (
        <li className='text-2xl mr-12 p-1.5 rounded-xl text-black hover:bg-black hover:text-white cursor-pointer'>
            {title}
        </li>

    )
}

export default PortfolioList;
