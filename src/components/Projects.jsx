import React from 'react'
import JavaLogo from '../assets/javalogo.png'
import ReactLogo from '../assets/reactlogo.png'
import SpigotLogo from '../assets/spigotlogo.png'

const Projects = () => {
  return (
    <div className='w-full py-[10rem] px-4 gradient'>
        <h2 className='text-center md:text-6xl sm:text-5xl text-4xl font-bold mb-1 text-black'>Projects</h2>
        <p className=' text-center md:text-3xl sm:text-2xl text-xl font-bold text-gray-500 mb-4'>See more on my <a href='https://github.com/HaleBradley' target='_blank' rel="noreferrer" className='text-[#0099ff] underline'>GitHub</a></p>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={JavaLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>Backend Authentication</h2>
                <p className='text-center text-xl text-gray-500'>Application was able to pull information from a database for a user's use in a business setting using .NET's authentication service.</p>
                <button className='bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://github.com/HaleBradley/Backend-Authentication' target='_blank' rel="noreferrer">Open</a></button>
            </div>

            <div className='w-full flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={SpigotLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>Spigot Plugin</h2>
                <p className='text-center text-xl text-gray-500'>A plugin for a Minecraft server to allow players to create custom armor stands with a simple to use GUI.</p>
                <button className='bg-black text-secondary w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://github.com/HaleBradley/ArmorStandGUI' target='_blank' rel="noreferrer">Open</a></button>
            </div>

            <div className='w-full flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={ReactLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>This Website!</h2>
                <p className='text-center text-xl text-gray-500'>Created a responsive website using React and Tailwind to show my development projects and other hobbies I'm passionate about.</p>
                <button className='bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href='https://github.com/HaleBradley/Personal-Portfolio-Website' target='_blank' rel="noreferrer">Open</a></button>
            </div>
        </div>
    </div>
  )
}

export default Projects