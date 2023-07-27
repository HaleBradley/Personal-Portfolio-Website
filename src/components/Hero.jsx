import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='font-bold px-2'>hale bradley</p>
            <h1 className='text-accent md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Software Engineer</h1>
            <div className='flex justify-center items-center'>
                <p className='text-accent md:text-5xl sm:text-4xl text-xl font-bold py-4'>Developing software with</p>
                <Typed className='text-accent md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['Java', 'React', 'Spigot', 'Django', 'C#', 'C++']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold py-2'>Learning With Passion</p>
        </div>
        <div className='herowave'></div>
    </div>
  )
}

export default Hero