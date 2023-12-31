import React from 'react'
import { FaGithubSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='absolute bottom-0 w-full mx-auto md:py-8 px-12 grid lg:grid-cols-4 gap-8 text-gray-300 bg-black'>
          <div>
              <h1 className='w-full text-3xl font-bold text-secondary'>hb</h1>
              <p className='py-4'>Rights are not reserved. If you want to use this website, go ahead.</p>
              <div className='flex justify-between md:w-[75%] my-6'>
                  <a href='https://github.com/HaleBradley' target="_blank" rel="noreferrer"><FaGithubSquare size={30} /></a>
                  <a href='https://twitter.com/HaleTheDev' target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
                  <a href='https://www.instagram.com/hale_bradley/' target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
              </div>
          </div>
      </div>
  )
}

export default Footer