import React from 'react'
import Box from './Box'

function Boxes() {
  return (
    <div className='w-full'>
    <div className='max-w-screen-lg flex gap-2  mx-auto py-32'>
      
   
  <Box width={'basis-3/2'}  />
  <Box width={'basis-3/5'}contact={true} hover={true}/>
    
    </div>
    </div>
  )
}

export default Boxes
