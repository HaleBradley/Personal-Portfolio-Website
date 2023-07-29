//import React, { useState } from 'react'
import { FaDiscord, FaTwitter,  } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiOutlineCopy } from 'react-icons/ai'
//import { LuCopyCheck } from 'react-icons/lu'
import Footer from "./Footer";

const Contact = () => {

    /* FUTURE USE FOR COPIED INDICATOR
    const [copyBox, setBox] = useState(false)

    const handleBoxDiscord = async () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('haledev')
    }

    const handleBoxTwitter = () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('@HaleTheDev')
    }

    const handleBoxEmail = () => {
        setBox(!copyBox)
        navigator.clipboard.writeText('hbradley786@gmail.com')
    }*/

  return (
    <div className='w-full py-40 text-black bg-white contactwave relative'> 
        <div className='max-x-[1240px] mx-auto grid md:grid-cols-3 z-10'>
            <div className='mx-auto my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to contact Hale?</h1>
                <p className='text-accent'>For business inquiries, contact Hale through Email</p>
            </div>
            <div className='my-4 z-10 col-span-2'>
                <div className='flex flex-row'>
                    <div className='justify-center justify-self-center mx-auto lg:px-12'>
                        <FaDiscord size={50} className='mx-auto' />
                        <button onClick={() => {navigator.clipboard.writeText('haledev')}} className='bg-accent w-[8rem] rounded-md font-medium my-6 mx-auto py-3 inline'>haledev  <AiOutlineCopy size={20} className='inline' /></button>
                    </div>
                    <div className='justify-center justify-self-center mx-auto lg:px-12'>
                        <FaTwitter size={50} className='mx-auto' />
                        <button onClick={() => {navigator.clipboard.writeText('@HaleTheDev')}} className='bg-accent w-[12rem] rounded-md font-medium my-6 ms-1 px-6 py-3'>@HaleTheDev  <AiOutlineCopy size={20} className='inline' /></button>
                    </div>
                     <div className='justify-center justify-self-center mx-auto lg:px-12'>
                        <MdEmail size={50} className='mx-auto' />
                        <button onClick={() => {navigator.clipboard.writeText('hbradley786@gmail.com')}} className='bg-accent w-[16rem] rounded-md font-medium my-6 px-6 py-3'>hb@halebradley.com  <AiOutlineCopy size={20} className='inline' /></button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact