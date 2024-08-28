import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-5 flex justify-between items-center border-b-[1px]  border-r-[1px] border-t-[1px] border-zinc-500'>
        <img  className="w-24" src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
      
    </div>
  )
}

export default Stripe
