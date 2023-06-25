import React from 'react'
import { FaDiscord, FaGithubSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>hb</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit autem iure nulla omnis eaque nesciunt soluta eligendi magni illum!</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <a href='https://github.com/HaleBradley' target="_blank"><FaGithubSquare size={30} /></a>
                <a href='https://twitter.com/HaleTheDev' target="_blank"><FaTwitter size={30} /></a>
                <a href='https://www.instagram.com/hale_bradley/' target="_blank"><FaInstagram size={30} /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer