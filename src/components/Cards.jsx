import React from 'react'
import JavaLogo from '../assets/javalogo.png'
import ReactLogo from '../assets/reactlogo.png'
import SpigotLogo from '../assets/spigotlogo.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={JavaLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>Java Project</h2>
                <p className='text-center text-4xl font-bold'>Description</p>
                <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Link</button>
            </div>

            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={ReactLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>Java Project</h2>
                <p className='text-center text-4xl font-bold'>Description</p>
                <button className='bg-black text-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Link</button>
            </div>

            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={SpigotLogo} alt='Java' className='w-20 mx-auto mt-[3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-4'>Java Project</h2>
                <p className='text-center text-4xl font-bold'>Description</p>
                <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Link</button>
            </div>
        </div>
    </div>
  )
}

export default Cards