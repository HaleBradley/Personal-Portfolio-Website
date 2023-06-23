import React from 'react'
import { FaDiscord, FaGithubSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>hb</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis placeat sapiente dicta laudantium ullam repellat nam velit repellendus eaque quaerat fugiat quo, maiores tenetur, eligendi facilis voluptatum at in culpa!</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaDiscord size={30} />
                <FaGithubSquare size={30} />
                <FaTwitter size={30} />
                <FaInstagram size={30} />
            </div>
        </div>
        <div className='flex justify-between'>
            <div>
                <ul>
                    <li className='py-2 text-sm'>Home</li>
                    <li className='py-2 text-sm'>Company</li>
                    <li className='py-2 text-sm'>Resources</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
        </div>
        <div className='justify-between'>
            <p>Website initial layout credit</p>
            <a href='https://www.youtube.com/watch?v=ZU-drSVodBw'>Code Commerce Tutorial</a>
        </div>
    </div>
  )
}

export default Footer