import React from 'react'
import Dev from '../assets/dev.jpg'

function AboutMe() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Dev} alt='Dev' className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>About Me</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Who is Hale Bradley?</h1>
                <p className=''>Hale is a Software Engineer who is attending NDSU for a degree in Computer Science. He has a passion for software development, eSports, and physical fitness. Hale has interest in game development for a future career, but for now is focusing on expanding his knowledge of coding in any field.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe