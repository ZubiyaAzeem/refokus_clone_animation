import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({title="Get Started"}) {
  return (
    <div className='  max-w-32 px-3 py-2 rounded-full bg-slate-50 flex items-center justify-between text-black'>
      <span className='text-sm font-medium'>{title}</span>
      <MdSubdirectoryArrowRight />
    </div>
  )
}

export default Button
