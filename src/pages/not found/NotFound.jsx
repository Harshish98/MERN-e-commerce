import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='pt-20 pb-10 flex flex-col justify-center items-center'>
        <img src='https://res.cloudinary.com/disvtxs51/image/upload/v1718615933/notfound_u3mrvx.avif' className='block'/>
        <p className='text-[#2c4152] font-light text-3xl mb-5'>We can't seem to find the page you are looking for</p>
       <Link to='/'><button className='block bg-[#2c4152] text-white px-5 py-2 rounded'>Take me back to home</button></Link> 
    </div>
  )
}
