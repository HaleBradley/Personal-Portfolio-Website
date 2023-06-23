import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>hale bradley</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Software Engineer</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Developing software with</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['Java', 'React', 'ADD MORE', 'TO-DO']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>He a coder.</p>
        </div>
    </div>
  )
}

export default Hero