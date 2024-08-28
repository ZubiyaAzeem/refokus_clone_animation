import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-2xl py-6 px-3 mx-auto flex items-center border-b-[1px] justify-between border-gray-500'>
            <div className='nleft flex items-center'>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='flex items-center gap-7 ml-9'>
                {["Home", "Work", "Culture", "", "News"].map((elem, i) => elem.length === 0 ? <span key={i} className='w-[0.3px] h-5 bg-slate-500'></span> : <a key={i}  className='text-sm flex items-center gap-1' href="#">
                    {i=== 1 && <span key={i}  style={{ boxShadow: "0 0 0.45em #00FF19" }} className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>}
                    {elem}
                </a>)}
            </div>
            </div>
            <Button/>


        </div>
    )
}

export default Navbar
