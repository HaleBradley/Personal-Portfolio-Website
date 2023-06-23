import React from 'react'
import Dev from '../assets/dev.jpg'

function Projects() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Dev} alt='Dev Image' className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Projects</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>See what projects Hale has completed</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a itaque accusantium earum laborum dolorum deserunt delectus! Sunt ipsum placeat cupiditate. Necessitatibus saepe alias nesciunt officia nobis obcaecati, itaque facere!</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>GitHub</button>
            </div>
        </div>
    </div>
  )
}

export default Projects