import React from 'react'
import Button from './Button'

function Product({value,mover,index}) {
  return (
    <div className='w-full py-11 text-white '>
        <div onMouseEnter={()=>{mover(index)
         // console.log(index)
        }} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='capitalize text-6xl font-medium'>{value.title}</h1>
            <div className='w-1/3 '>
                <p className='mb-11'>{value.desc}</p>
              <div className='flex items-center gap-9'>
                {value.live && <Button/>}
                {value.case && <Button title="Case Study" />}
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Product
